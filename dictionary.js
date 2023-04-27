import {restriccionesSanitarias} from './planificacion.js'

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

// restriccion between 0 and 90
export const listDestinations = [
    new Destination('CHI01', 'SANTIAGO', 5),
    new Destination('CHI02', 'CONCEPCION', 90),
    new Destination('FRA01', 'PARIS', 90),
    new Destination('ESP01', 'BARCELONE', 79),
    new Destination('ARG01', 'BUENOS_AIRES', 60),
    new Destination('ITA01', 'ROME', 30),
    new Destination('COL01', 'BOGOTA', 50),
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
    for (let i = 0; i < listDestinations.length; i++){
        if(input == listDestinations[i].codigo){
            return (i + 1);
            // return (i + 1); // just not to have a 0 as an output !
        }
    }
    console.log("Este codigo no hace parte de nuestros datos !");
    return false;
}