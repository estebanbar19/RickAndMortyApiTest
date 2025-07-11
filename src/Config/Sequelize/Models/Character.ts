import { DataTypes } from 'sequelize';
import { db } from '../Sequelize';

export const Characters = db.define('Character', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    status: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    type: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    attributes: {
        type: DataTypes.JSON,
        allowNull: true
    },
    species: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    episode: {
        type: DataTypes.JSON,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'Characters',
    schema: 'public',
    timestamps: true,
    paranoid: true
});
