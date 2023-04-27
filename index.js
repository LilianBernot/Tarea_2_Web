import {abrirSistemas, cerrarSistemas } from "./planificacion.js";
import {readline, readLineAsync} from "./input.js"
import { listDestinations, print_destinations_possible, test_entry } from "./dictionary.js";

console.log("ESTE harramienta esta desarrollado para indicar un nivel de restriccion sobre su destinacion.");

print_destinations_possible();

let codigo = await readLineAsync("Escribe el codigo de tu destinacion : ");

abrirSistemas(3000, () => {
  main();
});

async function main(){
    let valid = test_entry(codigo);
    while(!valid){
        codigo = await readLineAsync("   Intenta otra vez : ");
        valid = test_entry(codigo);
    }
    readline.close(); // close it just now, not before

    const destination = listDestinations[valid-1];

    destination.restrictions_func();
}

