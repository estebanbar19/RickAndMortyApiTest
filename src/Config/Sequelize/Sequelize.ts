import {Sequelize} from 'sequelize';
import { development } from '@config/Sequelize/Database/Config';

const database = development.database;
const username = development.username;
const password = development.password;
const host = development.host;
const dialect = development.dialect;

export const db = new Sequelize(database, username, password, {
    host: host,
    dialect: "postgres",
});