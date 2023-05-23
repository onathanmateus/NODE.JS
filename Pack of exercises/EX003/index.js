const express = require('express');
const rotas = require('./rotas/rotas.js');
const app = express();

app.use('/', rotas);

app.get('*', (req, res) => {
  res.send('Olá!')
});

app.listen(3000, () => {console.log('Servidor rodando')});