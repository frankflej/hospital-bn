"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../../database/models"));
var appointment = _models["default"].appointment;
var createAppoitment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, email, date_appo, addi_info, newAppointment;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, date_appo = _req$body.date_appo, addi_info = _req$body.addi_info;
          _context.next = 4;
          return appointment.create({
            name: name,
            email: email,
            date_appo: date_appo,
            addi_info: addi_info
          });
        case 4:
          newAppointment = _context.sent;
          if (newAppointment) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            ok: false,
            message: 'Sorry, Appointment not received'
          }));
        case 7:
          return _context.abrupt("return", res.status(200).json({
            ok: true,
            message: 'Appointment successfully received'
          }));
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0.message);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function createAppoitment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = createAppoitment;
exports["default"] = _default;