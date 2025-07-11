'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Characters', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        collate: 'pg_catalog.default'
      },
      status: {
        type: Sequelize.STRING(100),
        allowNull: true,
        collate: 'pg_catalog.default'
      },
      type: {
        type: Sequelize.STRING(100),
        allowNull: true,
        collate: 'pg_catalog.default'
      },
      gender: {
        type: Sequelize.STRING(100),
        allowNull: true,
        collate: 'pg_catalog.default'
      },
      attributes: {
        type: Sequelize.JSON,
        allowNull: true
      },
      species: {
        type: Sequelize.STRING(100),
        allowNull: true,
        collate: 'pg_catalog.default'
      },
      episode: {
        type: Sequelize.JSON,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    }, {
      schema: 'public',
      timestamps: true
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Characters', {
      schema: 'public'
    });

  }
};
