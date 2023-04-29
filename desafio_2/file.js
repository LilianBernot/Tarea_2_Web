import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__dirname);

import * as fs from 'fs';

export function modify_file(filename){
    // Read input file
    // fs.readFile(__dirname + filename, 'utf8', (err, data) => {
    // if (err) {
    //     console.log('Erreur');
    //     return err;
    // }

    // // Replace all characters with 'a'
    // let modifiedData = data.replace(/./g, 'a');

    // // Write to output file
    // fs.writeFile(__dirname + '/cifra_.txt', modifiedData, 'utf8', (err) => {
    //     if (err) throw err;
    //     console.log('File saved!');
    // });
    // });

    // try {
    //     const data = fs.readFile(filename, { encoding: 'utf8' });
    //     console.log(data);
    // } catch (err) {
    //     console.log('Error');
    //     console.log(err);
    // }

    fs.readFile(__dirname + filename, 'utf8', (err, data) => {
        if (err) {
          console.log("Error in readFile");
            console.error(err);
            return;
        }
    });
}

export function read_file(filename){

    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + filename, 'utf8', (err, data) => {
          if (err) {
            reject(err);
          } else {
            if (data.toLowerCase() !== data){
              console.log("Utilizacion de LowerCase !");
              resolve(data.toLowerCase());
            }
            resolve(data);
          }
        });
      });
}

export async function readFileAndPrintData(filename) {
    try {
      const data = await read_file(filename);
      console.log('This is the data ' + data);
    } catch (err) {
      console.error(err);
    }
  }

export function write_something(filename, content){
    // fs.writeFile(__dirname + path, content, 'utf8', (err) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    // });
    // console.log('File saved!');

    // fs.writeFile(__dirname + path, content, (err) => {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       console.log('Writing finished');
    //     }
    // });

    return new Promise((resolve, reject) => {
        console.log("Escribiendo el archivo cifrado...");
        fs.writeFile(__dirname + filename, content, (err) => {
          if (err) {
            console.log("Error");
            reject(err);
            // process.exit(); 
          } else {
            resolve('Writing finished in promise');
            // process.exit(); 
          }
        });
    });
}