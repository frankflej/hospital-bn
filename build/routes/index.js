"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _appoitmentRoute = _interopRequireDefault(require("./appoitmentRoute"));
var router = _express["default"].Router();
router.use('/appointment', _appoitmentRoute["default"]);
var _default = router;
exports["default"] = _default;