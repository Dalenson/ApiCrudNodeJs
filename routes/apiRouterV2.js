var express = require('express');
var apiRouterV2 = express.Router();

const knex = require('knex')(require('../knexfile').development)

apiRouterV2.get('/produtos', function (req, res, next) {
  knex('produtos')
    .select('*')
    .then(produtos => {
      res.status(200).json(produtos);
    })
    .catch(erro => res.status(500).json({ message: `Erro ao buscar produtos: ${erro.message}` }))
});

apiRouterV2.get('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  if (id) {
    knex('produtos')
      .select('*')
      .where({ id: id })
      .then(produtos => {
        if (!produtos.length) {
          res.status(404).json({ message: `Erro ao buscar produtos: ${erro.message}` });
          return
        }
        res.status(200).json(produtos)
      })
      .catch(erro => {
        res.status(404).json({ message: `Erro ao buscar produtos: ${erro.message}` })
      })
  } else {
    res.status(404).json({ message: "Produto não encontrado" })
  }
});

apiRouterV2.post('/produtos', function (req, res, next) {
  let produto = req.body;
  knex('produtos')
  .insert(produto, ['id'])
  .then(produtos => {
    if (!produtos.length) {
      res.status(400).json({ message: `Erro ao inserir produto` });
      return
    }
    let id = produtos[0].id;
    res.status(201).json({ message: "Produto inserido com sucesso", data: { id } })
  })
});

apiRouterV2.delete('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  if (id) {
    idInt = Number.parseInt(id);
    knex('produtos')
    .where({id: idInt})
    .del()
    .then(result => {
      if(result > 0) {
        res.status(200).json({ message: "Produto excluido com sucesso!"})
      } else {
        res.status(404).json({ message: "Não foi excluido nenhum produto" })
      }
    })
    .catch(erro => {
      res.status(404).json({ message: "Erro ao excluir produto" })
    });
  } else {
    res.status(404).json({ message: "Produto não encontrado" })
  }
});


apiRouterV2.put('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  let produto = req.body;
  if (id) {
    idInt = Number.parseInt(id);
    knex('produtos')
    .where({id: idInt})
    .update(produto)
    .then(result => {
      if(result > 0) {
        res.status(200).json({ message: "Produto alterado com sucesso!", data: result });
      } else {
        res.status(200).json({ message: "Nenhum produto foi alterado!"});
      }
      
    })
    .catch(erro => {
      res.status(404).json({ message: `Erro ao atualizar produto: ${erro.message}` })
    });
  } else {
    res.status(404).json({ message: "Produto não encontrado" });
  }
});

module.exports = apiRouterV2;
