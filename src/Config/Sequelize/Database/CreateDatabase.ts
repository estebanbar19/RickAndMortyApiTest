
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

async function createDatabase() {
    const client = new Client({
        user: process.env.SEQUELIZE_DB_USERNAME || 'postgres',
        password: process.env.SEQUELIZE_DB_PASSWORD,
        host: process.env.SEQUELIZE_DB_HOST || 'localhost',
        port: parseInt(process.env.SEQUELIZE_DB_PORT || '5432'),
        database: 'postgres' // Conectamos a la base de datos por defecto
    });

    try {
        await client.connect();

        // Primero intentamos eliminar conexiones a la base de datos
        await client.query(`
            SELECT pg_terminate_backend(pg_stat_activity.pid)
            FROM pg_stat_activity
            WHERE pg_stat_activity.datname = 'rickandmortyapitest'
            AND pid <> pg_backend_pid();
        `);

        // Intentamos eliminar la base de datos si existe
        await client.query('DROP DATABASE IF EXISTS rickandmortyapitest;');

        // Creamos la base de datos con las configuraciones específicas
        await client.query(`
            CREATE DATABASE rickandmortyapitest
            WITH
            OWNER = postgres
            ENCODING = 'UTF8'
            LC_COLLATE = 'Spanish_Colombia.1252'
            LC_CTYPE = 'Spanish_Colombia.1252'
            LOCALE_PROVIDER = 'libc'
            TABLESPACE = pg_default
            CONNECTION LIMIT = -1
            IS_TEMPLATE = False;
        `);

        console.log('Base de datos creada exitosamente');
    } catch (error) {
        console.error('Error al crear la base de datos:', error);
        throw error;
    } finally {
        await client.end();
    }
}

createDatabase().catch(console.error);