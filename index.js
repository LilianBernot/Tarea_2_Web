import { abrirSistemas, cerrarSistemas } from "./planificacion.js";
import {readline, readLineAsync} from "./input.js"


let codigo = await readLineAsync("Escribe el codigo de tu destinacion : ");

const regex = /^[A-Z]{3}\d{2}$/; // 3 leters, 2 numbers and that's it

let valid = regex.test(codigo);
while(valid !== true){
    console.log("Este codigo no es valido !");
    codigo = await readLineAsync("   Intenta otra vez : ");
    valid = regex.test(codigo);
}
readline.close(); // close it just now, not before

console.log("Vamos a " + codigo + " !");
abrirSistemas(3300);

