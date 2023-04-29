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
            console.error(err);
            return;
        }
        console.log(data);
        // fs.writeFile(__dirname + '/cifra_.txt', 'uyzegfq duyziqeu sdhuzi a', 'utf8', (err) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     console.log('File saved!');
        // });
        console.log(data);
        console.log('Closing process');
        process.exit(); // for the terminal to end
    });
}

export function write_something(path, content){
    fs.writeFile(path, content, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File saved!');
        process.exit(); 
    });
}