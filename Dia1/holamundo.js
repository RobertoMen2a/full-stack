const fs = require("fs");
const hello = "hola mundo";
//const archivo = fs.readFileSync("myread.txt", "utf-8");

//console.log(hello);
//console.log(archivo);

//let data = "TEXTOE SCRITO";

//fs.writeFileSync("mywrite.txt", data);
//console.log(fs.readFileSync("mywrite.txt", "utf8"));

const archivo1 = fs.readFile("myread.txt", "utf-8", (err, data) =>{
    console.log("datos ", data);
});
console.log("archivo a leer");





