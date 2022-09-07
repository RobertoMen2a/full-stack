const fs = require("fs");
const archivo = fs.readFileSync("myread.txt", "utf-8");

const tiempo =  Date.now();
console.log("Lectura con readFileSync");
console.log(archivo);
console.log("Despues de leer",  Date.now()-tiempo , " milisegundos ");

const tiempo2 =  Date.now();
console.log("Lectura 2 con readFile");
const archivo1 = fs.readFile("myread.txt", "utf-8", (err, data) =>{
    console.log(" ", data);
});
console.log("archivo despues de leer", Date.now()-tiempo2,  " milisegundos ");