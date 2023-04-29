import { createInterface } from "readline";

export let readLineAsync = msg => {
    return new Promise(resolve => {
      readline.question(msg, userRes => {
        resolve(userRes);
      });
    });
  }

export let readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

export function test_rotation(rotation){
    // verifies if the rotation is a positive int 
    let num = parseInt(rotation);

    if (isNaN(num) || num < 0 || num != rotation) {
        console.log("Rotacion invalida ! Por favor, escribe un nombre entero positivo.");
        return false;
    } else {
        console.log("   La rotacion sera de " + num);
        return true;
    }
}