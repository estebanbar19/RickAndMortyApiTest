const { Sequelize } = require('sequelize');

const database = "rickandmortyapitest";
const username = "postgres";
const password = "admin";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'postgres',
});

export default sequelize;