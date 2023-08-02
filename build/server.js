"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _sequelize = require("sequelize");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("../database/models/index"));
var _routes = _interopRequireDefault(require("./routes"));
_dotenv["default"].config();
var app = (0, _express["default"])();
app.use('/api', _routes["default"]);
var _process$env = process.env,
  DB_NAME = _process$env.DB_NAME,
  DB_USER = _process$env.DB_USER,
  DB_PASSWORD = _process$env.DB_PASSWORD,
  DB_PORT = _process$env.DB_PORT;
var server = app.listen(DB_PORT);
var sequelize = new _sequelize.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});
var dbCon = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _index["default"].sequelize.authenticate();
        case 3:
          _context.next = 8;
          break;
        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.log("db error: ".concat(_context.t0.message));
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 5]]);
  }));
  return function dbCon() {
    return _ref.apply(this, arguments);
  };
}();
Promise.all([dbCon(), server]).then(function () {
  console.log("Server listening on port:".concat(DB_PORT));
  console.log('DB connection successful');
});