const Sequelize  = require('sequelize');
const db = require('../config/database');

const Serieantiga = db.define('serieantiga', {
    codigo: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    nomeSerie: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    exibido:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    notas:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    preferido:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    piorSerie:{
        type: Sequelize.STRING, 
        allowNull: false
    }
})

module.exports = Serieantiga;