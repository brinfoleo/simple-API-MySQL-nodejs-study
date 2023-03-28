const sequelize = require('sequelize');
const database = new sequelize('nodejs-login', 'root', 'qwe123', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
});

database.sync();

module.exports=database;