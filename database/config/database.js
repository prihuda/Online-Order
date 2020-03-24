const Sequelize = require('sequelize')

const sequelize = new Sequelize('baru_nih', 'postgres', '123456', {
    dialect: 'postgres',
    host: 'localhost'
})

module.exports = sequelize