const Sequelize  = require('sequelize');
const db = require('../config/database');

const Videogame = db.define('videogame', {
    codigo: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    nomeVideogame: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    nomeJogo: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    categora:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    anoLancamento:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    jogabilidade:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    notas:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    piorJogo:{
        type: Sequelize.STRING, 
        allowNull: false
    }
})
module.exports = Videogame;