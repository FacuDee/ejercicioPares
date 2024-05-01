import * as readlineSync from "readline-sync";

let base: number = readlineSync.questionInt("Por favor, ingresa la base (en cm.)");

let altura: number = readlineSync.questionInt("Por favor, ingresa la altura (en cm.)");

let area: number = base * altura;

console.log("El área del rectángulo es de " + area + " cm2.");