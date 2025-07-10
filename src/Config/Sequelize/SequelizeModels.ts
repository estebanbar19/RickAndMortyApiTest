import { DataTypes } from 'sequelize';
import { db } from './Sequelize';

export const Characters = db.define('Character', {
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
    updatedAt: DataTypes.DATE,
}, {
    tableName: 'Characters',
});
