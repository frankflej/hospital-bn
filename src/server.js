import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
import express from "express";
import db from '../database/models/index.js';
import router from "./routes/index.js";

dotenv.config()
const app = express();

app.use('/api', router);
const {DB_NAME,DB_USER,DB_PASSWORD,DB_PORT}=process.env
const server = app.listen(DB_PORT);
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});

const dbCon = async () => {
  try {
    await db.sequelize.authenticate();
  } catch (error) {
    console.log(`db error: ${error.message}`);
  }
};

Promise.all([dbCon(), server]).then(() => {
  console.log(`Server listening on port:${DB_PORT}`);
  console.log('DB connection successful');
});

