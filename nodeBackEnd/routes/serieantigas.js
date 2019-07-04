const express = require('express');
const Serieantiga = require('../models/serieantigas');
const router = express.Router();

router.get("/", (req,res) => 
    Serieantiga.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
          }));

router.get("/:id", (req, res) => {
    Serieantiga.findOne({
        where: {
            codigo: req.params.id,
        }
    }).then(result => {
        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    }).catch(error => {
        res.status(412).json({msg: error.message});
    });
})

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/search/params', (req, res) => {
    var query = `%${req.query.nome}%`;
  
    console.log(query)
    Serieantiga.findAll({ where: { nome: { [Op.like]: query } } })
      .then(serieantigas => res.json(serieantigas))
      .catch(err => console.log(err));
  });
  

router.post('/', (req,res) => {
    console.log(req.body);
    Serieantiga.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });    
    
router.put('/', (req,res) => {
    Serieantiga.update(req.body, { 
        where: {
        codigo: req.body.codigo
        }
      })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    }); 
    
router.delete("/:id", (req,res) => {
    Serieantiga.destroy({
        where: {
            codigo: req.params.id
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
                res.status(412).json({msg: error.message});
            });
        });    

module.exports = router;