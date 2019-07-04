const Sequelize  = require('sequelize');
const db = require('../config/database');

const Desenho = db.define('desenho', {
    codigo: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    categoria: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    exibido: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    episodio:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    
    notas:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    piorDesenho:{
        type: Sequelize.STRING, 
        allowNull: false
    }
})
module.exports = Desenho;