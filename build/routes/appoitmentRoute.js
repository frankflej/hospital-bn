"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _createAppoitment = _interopRequireDefault(require("../controllers/createAppoitment"));
var router = _express["default"].Router();
router.post('/', _createAppoitment["default"]);
var _default = router;
exports["default"] = _default;