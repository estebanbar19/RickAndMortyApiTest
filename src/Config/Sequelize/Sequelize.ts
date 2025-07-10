import {Sequelize} from 'sequelize';

const database = "rickandmortyapitest";
const username = "postgres";
const password = "admin";
const host = "localhost";

export const db = new Sequelize(database, username, password, {
    host: host,
    dialect: 'postgres',
});
