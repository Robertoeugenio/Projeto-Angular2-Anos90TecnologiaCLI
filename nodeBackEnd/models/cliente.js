const Sequelize  = require('require');
const db = require('../config/database');

const Cliente = db.define('define', {
    codigo: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    nmome: {
        type: Sequelize.STRING, 
        allowNull: false
    }
})