Explications of the code. 

General : 
To launch the code, the folder of the index file has to be added to the call : 
- to launch code of the Desafio 1: ```bash node desafio_1/index.js```.
- to launch code of the Desafio 2: ```bash node desafio_2/index.js```.
Otherwise, you can go in the folder of the corresponding desafio and launch ```bash node index.js```.

Desafio 1 : 
- In the ```index.js``` file, I added the ferification of the input of the user. The idea is to know if the input code is valid or not, verifying at firts it's form and then if it is part of our database. 
- The database is created in the ```dictionnary.js```. A ```Destination``` class has been built, to contain the informations of each destination, similarily to a Python dictionary. The elements of the database are contained in a list.
- The function ```abrirSistemas``` has been changed, adding a callback. The problem without callback is that the code continues to run. The callback imposes the code to wait until the end of the function. 
- The function ```restriccionesSanitarias``` has been changed to add it the generation of a random number and the emission of the certificate. After the execution of the function, it executes the ```cerrarSistemas``` function. 

Desafio 2 : 
- We first ask the user to enter the rotation, path and name of the file. We check if the rotation is a positive int and if the file exists, otherwise we ask to re-write the informations. 
- We then read the file. 
- As the file can have multiple lines, we separate the string in list, and then we separate at the white spaces. We change the characters we want to modify and let untouch the ones we don't want. 
- Because JS codes with the unicode and not ASCII, we look for the unicode of each character. We build a list containing the codes of the characters we want to change and return the next character given by the rotation. 
- When it's done, we write on the output file and close the code. 

Note: the input file is hoping to be a '.txt' file. Ameliorations could be done so that the code can encrypt .xlsx or other types of file.