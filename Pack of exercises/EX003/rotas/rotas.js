const express = require('express');
const rotas = express.Router();

let cursosInfo = [
  {'curso':'node', 'info':'Curso de NODE.JS'},
  {'curso':'react.js', 'info':'Curso de REACT.JS'},
  {'curso':'java', 'info':'Curso de Java'},
  {'curso':'arduino', 'info':'Curso de Arduino'},
  {'curso':'html', 'info':'Curso de HTML5'} 
]

rotas.get('/', (req, res) => {
  res.json({olá: 'Seja bem-vindo!'});
});

rotas.get('/:cursoid', (req, res) => {
  const curso = req.params.cursoid
  const cursoInfo = cursosInfo.find(i => i.curso === curso)
  if (!cursoInfo) {
    res.status(404).json({erro: 'Curso não encontrado', cursoPesquisado: curso})
  }else {
    res.status(200).json(cursoInfo)
  }
});

module.exports = rotas;