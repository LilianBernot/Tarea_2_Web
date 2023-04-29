// //Biblioteca planificacion.js

export function abrirSistemas(delay, callback) {
  //Si lo desea este código puede modificarse

  /* La funcion recibe como parametro un “delay” que es la cantidad de milisegundos que demorará el sistema en abrirse
  delay DEBE ser mayor o igual a 3300 */

  console.log("Preparando el sistema...");
  setTimeout(() => {
    console.log("Puede iniciar el proceso");
    callback();
  }, delay);
}

export async function cerrarSistemas(){
   //No se modifica el código
   console.log("Sistemas cerrados de forma segura");
}

export function restriccionesSanitarias(restriccion, destino) {
/*Modifique el código para manejar la restricción.
Recuerde que restricción es un entero, por ende lo que está en este código es referencial, sin embargo NO MODIFIQUE ni setTimeout ni el retorno de una promesa. Solo intervenga la función callback de setTimeout*/
  console.log("Verificando las restricciones...")
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      let min = 10;
      let max = 100;
      let randomGenerado = Math.floor(Math.random() * (max - min + 1)) + min;
      // console.log("Restriction " + restriccion + " Random " + randomGenerado);
      if(restriccion > randomGenerado) {
        const objReturn = {};
        objReturn.restriccion = true;
        objReturn.status = "   Sin restricciones sanitarias a destino: " + destino;
        resolve(objReturn.status);
        emiteCertificado(destino, objReturn.restriccion)  
        .then(result => {
          console.log(result);
          cerrarSistemas();
        })
            .catch(error => {
            console.log(error);
            cerrarSistemas();
        });
      }
      else {
        console.log("   Restriccion: Hay restricciones, no podrá ir a ese destino.");
        cerrarSistemas();
      }
    }, 3000 )
  })
}

function emiteCertificado(destino, restriccion) {


  return new Promise((resolve, reject) => {
   setTimeout( () => {
    if(restriccion){ //to change : forbidden does not exist
       const objReturn = {};
       objReturn.certificado = true;
       objReturn.status = "   Certificado emitido para destino " + destino;
       resolve( objReturn.status);
     }
     else {
      reject("error en emisión")
    };
   }, 3103);
 })
}
