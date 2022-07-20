const Joi = require('joi');

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { User } = require('../database/models');

require('express-async-errors');

// npm install express-async-errors --save

const userService = {
  // REQUISITO 4
  validate: async (body) => {
  // pra validar, eu segui o exemplo desse site: https://joi.dev/api/?v=17.6.0
    const schema = Joi.object({
      displayName: Joi.string().min(8),
      password: Joi.string().min(6),
      email: Joi.string().email(),
      image: Joi.string(),
    });
    const validation = await schema.validateAsync(body);
    return validation;
  },

  checkIfExists: async (email) => {
  // vou checar se existe esse email que quero adicionar
    const user = await User.findOne({ where: { email } });
    if (user) return true;
  },

  create: async (user) => {
  // adiciona em json, mas precisa converter para string pra adicionar no banco de dados
    const userCreated = await User.create(user);
    return userCreated.toJSON(user);
  },

  newToken: async (user) => {
  // gero um novo token pro usuário adicionado
    const token = jwt.sign({ data: user }, JWT_SECRET, { expiresIn: '15d' });
    return token;
  },

  // REQUISITO 5
  // https://stackoverflow-com.translate.goog/questions/31679838/sequelizejs-findall-exclude-field?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=sc
  getAll: async () => {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
  },
  // REQUISITO 6: eu preciso buscar o primeiro user com o id correspondente e excluir o password. Como não pode listar um user inexistente, eu faço a condicional abaixo.
 getById: async (id) => {
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });
    if (!user) return null;
    return user;
  },
};

module.exports = userService; 