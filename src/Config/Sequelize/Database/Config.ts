import dotenv from "dotenv";
import { Dialect } from "sequelize/types";

dotenv.config();

interface DatabaseConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
}

interface Config {
    development: DatabaseConfig;
}

const config: Config = {
    development: {
        username: process.env.SEQUELIZE_DB_USERNAME || "",
        password: process.env.SEQUELIZE_DB_PASSWORD || "",
        database: process.env.SEQUELIZE_DB_NAME || "",
        host: process.env.SEQUELIZE_DB_HOST || "",
        dialect: (process.env.SEQUELIZE_DB_DIALECT as Dialect) || ""
    }
}

export = config;