const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send('Hello World')
});
app.get('/api', (req, res)=>{
  res.json({api: 'Seja bem vindo !'})
});

app.listen(3000, ()=>{console.log('Servidor rodando')});