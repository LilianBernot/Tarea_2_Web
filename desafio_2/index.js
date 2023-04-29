import { readLineAsync, readline, test_rotation } from "./input.js";
import { modify_file, read_file, readFileAndPrintData, write_something } from "./file.js";
import { modify_data } from "./data.js";

import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("ESTE herramienta esta desarrollado para cifrar un archivo con la rotacion que quieres.");

///////////////////////////// Rotation input
// let rotation = await readLineAsync("Escribe el numero de rotacion, entero positivo: ");
// let valid = test_rotation(rotation);
// while(!valid){
//     rotation = await readLineAsync("   Intenta otra vez : ");
//     valid = test_rotation(rotation);
// }
// readline.close();

///////////////////////////// Path input
// let path_name = await readLineAsync("Escribe la ruta relativa del archivo: ");
// let input_name = await readLineAsync("Escribe el nombre del archivo: ");
// while (fs.existsSync(__dirname + path_name + input_name) !== true){
//     console.log('El archivo no existe.');
//     console.log('   Intenta otra vez:');
//     path_name = await readLineAsync("   Escribe la ruta relativa del archivo: ");
//     input_name = await readLineAsync("   Escribe el nombre del archivo: ");
// }
// console.log("El archivo a cifrar : " + path_name + input_name);
// readline.close();

let path_name = '/';
let input_name = 'input.txt';

// const parsedPath = path.parse(input_name);
// const output_name = parsedPath.name + '_cifrado' + parsedPath.ext;
// console.log('Nombre del output: ' + output_name);

//////////////////////////// Data reading and modification
// const data = await read_file(path_name + input_name);
// console.log("Data :" + data);

const modified_data = modify_data('agc', 1);

// write_something(path_name + output_name, "contenido : " + data);

console.log("Salida : "+ modified_data);
process.exit(); 

// readFileAndPrintData(path_name + input_name);

// write_something(__dirname + '/cifra_.txt', "z_efèqy aizdh aizu dhaiuz sq");

// modify_file("/input.txt");