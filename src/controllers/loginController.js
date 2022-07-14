const loginService = require('../services/loginService');

// se for um usuário com email e password diferente do que tem no banco de dados, vai dar o erro. Como também, se o token gerado for diferente, vai dar erro; caso contrário, gerará o token.
const loginController = {
user: async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
  return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const token = await loginService.user(email, password);

  if (!token) return res.status(400).json({ message: 'Invalid fields' });

  return res.status(200).json({ token });
},
};

module.exports = loginController;