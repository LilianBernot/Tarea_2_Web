// class Animal {
//     constructor(name, sound) {
//       this.name = name;
//       this.sound = sound;
//     }
  
//     speak() {
//       console.log(`${this.name} says ${this.sound}`);
//     }
// }

// const cat = new Animal('Cat', 'Meow');
// cat.speak();


const prompt=require("prompt-sync")({sigint:true}); 
  
var codigo = prompt("Escribe el codigo de tu destinacion : ");
console.log("Vamos a "+codigo+"!");
