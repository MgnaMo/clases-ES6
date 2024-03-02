import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";

const cliente1 = new Cliente("Juan Pérez");
cliente1.impuesto = new Impuestos(50000, 10000);
const impuestoAPagar = cliente1.calcularImpuestoTotal();
console.log(`${cliente1.nombre} debe pagar un impuesto de ${impuestoAPagar}`);