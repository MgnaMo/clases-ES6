"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cliente1 = new _cliente["default"]("Juan Pérez");
cliente1.impuesto = new _impuestos["default"](50000, 10000);
var impuestoAPagar = cliente1.calcularImpuestoTotal();
console.log("".concat(cliente1.nombre, " debe pagar un impuesto de ").concat(impuestoAPagar));
