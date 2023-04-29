import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import * as fs from 'fs';

export function read_file(filename){

    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + filename, 'utf8', (err, data) => {
          if (err) {
            reject(err);
          } else {
            // if (data.toLowerCase() !== data){
            //   console.log("Utilizacion de LowerCase !");
            //   resolve(data.toLowerCase());
            // }
            resolve(data);
          }
        });
      });
}

export function write_something(filename, content){

    try {
      fs.writeFileSync(__dirname + filename, content);
      // fichier écrit avec succès
    } catch (err) {
        console.error(err); 
    }
}