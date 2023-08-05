"use strict";

var _sequelize = require("sequelize");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("../database/models/index.js"));
var _index2 = _interopRequireDefault(require("./routes/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const app = (0, _express.default)();
app.use('/api', _index2.default);
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  PORT
} = process.env;
const server = app.listen(PORT);
const sequelize = new _sequelize.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});
const dbCon = async () => {
  try {
    await _index.default.sequelize.authenticate();
  } catch (error) {
    console.log(`db error: ${error.message}`);
  }
};
Promise.all([dbCon(), server]).then(() => {
  console.log(`Server listening on port:${PORT}`);
  console.log('DB connection successful');
});