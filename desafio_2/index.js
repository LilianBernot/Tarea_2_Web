import { readLineAsync, readline, test_rotation } from "./input.js";


console.log("ESTE herramienta esta desarrollado para cifrar un archivo con la rotacion que quieres.");

let rotation = await readLineAsync("Escribe el numero de rotacion, entero positivo: ");
let valid = test_rotation(rotation);
while(!valid){
    rotation = await readLineAsync("   Intenta otra vez : ");
    valid = test_rotation(rotation);
}
readline.close();