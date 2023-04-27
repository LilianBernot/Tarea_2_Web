import {restriccionesSanitarias} from './planificacion.js'

// restriccion between 0 and 90

class Destination{
    constructor(codigo, name, restriction){
        this.codigo = codigo;
        this.name = name;
        this.restriction = restriction;
    }
    restrictions_func(){
        restriccionesSanitarias(this.restriction, this.name)
        .then(result => {
            console.log(result);
        })
            .catch(error => {
            console.log(error);
        });
    }
}

export const listDestinations = [
    new Destination('CHI01', 'SANTIAGO', 5),
    new Destination('FRA01', 'PARIS', 100),
]

export function print_destinations_possible (){
    console.log("Aca son las destinaciones que existen : ")
    for (let i = 0; i < listDestinations.length; i++) {
        console.log("- Ciudad " + listDestinations[i].name + ', codigo : ' + listDestinations[i].codigo);
    }
    console.log("\n");
}
    

const regex = /^[A-Z]{3}\d{2}$/; // 3 leters, 2 numbers and that's it
export function test_entry (input){
    let valid = regex.test(input);
    if (valid !== true){
        console.log("Este codigo no es valido !")
        return false;
    }
    let exist = false;
    for (let i = 0; i < listDestinations.length; i++){
        if(input == listDestinations[i].codigo){
            exist = true;
        }
    }
    if (exist !== true){
        console.log("Este codigo no hace parte de nuestros datos !");
        return false;
    }
    return true;
}