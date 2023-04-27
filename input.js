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