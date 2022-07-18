const express = require('express');
const login = require('./routes/login');
const user = require('./routes/user');
const getAll = require('./routes/user');
const getById = require('./routes/user');
const category = require('./routes/category');

// ...

const app = express();

app.use(express.json());

app.use('/login', login);

app.use('/user', user);

app.use((err, req, res, _next) => {
  const { message } = err;
  res.status(400).json({ message });
});

app.use('/user', getAll);

app.use('/user/:id', getById);

app.use('/categories', category);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
