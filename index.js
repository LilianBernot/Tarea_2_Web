import { abrirSistemas, cerrarSistemas } from "./planificacion.js";
import {readline, readLineAsync} from "./input.js"
import { listDestinations, print_destinations_possible, test_entry } from "./dictionary.js";

console.log("ESTE harramienta esta desarrollado para indicar un nivel de restriccion sobre su destinacion.");

print_destinations_possible();

// listDestinations[1].restrictions_func();

let codigo = await readLineAsync("Escribe el codigo de tu destinacion : ");
// abrirSistemas(3300);


let valid = test_entry(codigo);
while(valid !== true){
    codigo = await readLineAsync("   Intenta otra vez : ");
    valid = test_entry(codigo);
}
readline.close(); // close it just now, not before

console.log("Vamos a " + codigo + " !");


// ask first codigo 
// conection to system 
// verifying if it has he good form and it is in the database 
// emitting certificate
