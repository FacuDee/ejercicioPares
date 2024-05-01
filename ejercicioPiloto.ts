/* En una prueba el piloto tiene que completar cuatro vueltas. Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta. El programa debe retornar el tiempo total de vuelta y el promedio de vuelta */

import * as readlineSync from "readline-sync";

let vuelta1: number = readlineSync.questionInt("Ingrese el tiempo de la vuelta 1 (en segundos):");

let vuelta2: number = readlineSync.questionInt("Ingrese el tiempo de la vuelta 2 (en segundos):");

let vuelta3: number = readlineSync.questionInt("Ingrese el tiempo de la vuelta 3 (en segundos):");

let vuelta4: number = readlineSync.questionInt("Ingrese el tiempo de la vuelta 4 (en segundos):");

let sumaTiempo: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let promedioVueltas: number = sumaTiempo / 4;


console.log("Tiempo total de carrera: " + sumaTiempo + " segundos.");
console.log("Promedio de vuelta: " + promedioVueltas + " segundos.");
