const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateToken = (req, res, next) => {
// REQUISITO 5
// vai verificar se tem token, se não tiver, retorna o erro. Se tiver token, vou verificar se o token corresponde ao secret e vai rodar uma função que vai. Mais fácil pra ler.
  // const token = req.headers['authorization'];
  // if (!token) {
  //   return res.status(401).json({ message: 'Token not found' });
  // } else {
  //   const tokenSecretOk = (err) => {
  //     if (err){
  //     return res.status(401).json({ message: 'Expired or invalid token' });
  //     }
  //     next();
  //   }
  //   return jwt.verify(token, JWT_SECRET, tokenSecretOk);
  // }
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  } 
    const tokenSecretOk = (err) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
      next();
    };
    return jwt.verify(token, JWT_SECRET, tokenSecretOk);
};

module.exports = {
  validateToken,
};