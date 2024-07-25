const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', '6L#^$cv9DH3B$N', { dialect: 'mysql', host: 'localhost' })

module.exports = sequelize
