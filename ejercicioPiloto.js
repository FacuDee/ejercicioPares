"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var vuelta1 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 1 (en segundos):");
var vuelta2 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 2 (en segundos):");
var vuelta3 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 3 (en segundos):");
var vuelta4 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 4 (en segundos):");
var sumaTiempo = vuelta1 + vuelta2 + vuelta3 + vuelta4;
var promedioVueltas = sumaTiempo / 4;
console.log("Tiempo total de carrera: " + sumaTiempo + " segundos.");
console.log("Promedio de vuelta: " + promedioVueltas + " segundos.");