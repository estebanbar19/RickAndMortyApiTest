const { DataTypes } = require('sequelize');
const sequelize = require('./Sequelize')

const Character = sequelize.define('Character', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: DataTypes.STRING,
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    attributes: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    species: DataTypes.STRING,
    episode: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
}, {
    tableName: 'Characters',
})