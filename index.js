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

const regex = /^[A-Z]{3}\d{2}$/; // 3 leters, 2 numbers and that's it


var valid = regex.test(codigo);
while(valid !== true){
    console.log("Este codigo no es valido !");
    codigo = prompt("   Intenta otra vez : ");
    valid = regex.test(codigo);
}
console.log("Vamos a "+codigo+"!");