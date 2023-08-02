const dotenv = require("dotenv");

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT, DB_URL } = process.env;
module.exports = {
    development: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        database_url: DB_URL,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres"
    },
    production: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        database_url: DB_URL,
        port: DB_PORT,
        host: DB_HOST,
        dialect: "postgres"
    }
}