Explications of the code. 

General : 
To launch the code, the folder of the index file has to be added to the call : 
- to launch code of the Desafio 1: <node desafio_1/index.js>.

Desafio 1 : 
- In the "index.js" file, I added the ferification of the input of the user. The idea is to know if the input code is valid or not, verifying at firts it's form and then if it is part of our database. 
- The database is created in the "dictionnary.js". A "Destination" class has been built, to contain the informations of each destination, similarily to a Python dictionary. The elements of the database are contained in a list.
- The function "abrirSistemas" has been changed, adding a callback. The problem without callback is that the code continues to run. The callback imposes the code to wait until the end of the function. 
- The function "restriccionesSanitarias" has been changed to add it the generation of a random number and the emission of the certificate. After the execution of the function, it executes the "cerrarSistemas" function. 