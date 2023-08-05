import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
import express from "express";
import db from '../database/models/index.js';
import router from "./routes/index.js";
import bodyParser from "body-parser";

dotenv.config()
const app = express();

app.use(express.json());
app.use('/api', router);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
const {DB_NAME,DB_USER,DB_PASSWORD,DB_PORT,PORT}=process.env
const server = app.listen(PORT);
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
  console.log(`Server listening on port:${PORT}`);
  console.log('DB connection successful');
});

