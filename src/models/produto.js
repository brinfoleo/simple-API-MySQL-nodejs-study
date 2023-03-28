const sequelize = require('sequelize');
const database = require('../db');
const schema = '';

class Produto extends sequelize.Model { }

Produto.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Descricao:
        {
            type: sequelize.STRING,
            allowNull: true

        },
        DataCriacao:
        {
            type: sequelize.DATE,
            allowNull: false

        },
        DataAtualizacao:
        {
            type: sequelize.DATE,
            allowNull: true

        }
    },
    {
        sequelize: database, modelName: 'tbproduto', schema
    }
);

module.exports = Produto