// export const Dictionary = {};

// const myDict = {
//     key1: 'value1',
//     key2: 2,
//     key3: true
// };

// console.log(myDict.key1); // logs 'value1'
// console.log(myDict['key2']); // logs 2


// class MyClass {
//     constructor(prop1, prop2) {
//       this.prop1 = prop1;
//       this.prop2 = prop2;
//     }
  
//     myMethod() {
//       console.log('Hello, world!');
//     }
// }

// const myObject = new MyClass('value1', 2);
// console.log(myObject.prop1); // logs 'value1'
// myObject.myMethod(); // logs 'Hello, world!'

class Destination{
    constructor(codigo, name, restriction){
        this.codigo = codigo;
        this.name = name;
        this.restriction = restriction;
    }
}

export const listDestinations = [
    new Destination('CHI01', 'SANTIAGO', 5),
    new Destination('FRA01', 'PARIS', 1),
]

export function print_destinations_possible (){
    console.log("Aca son las destinaciones que existen : ")
    for (let i = 0; i < listDestinations.length; i++) {
        console.log("- Ciudad " + listDestinations[i].name + ', codigo : ' + listDestinations[i].codigo);
    }
    console.log("\n");
}
