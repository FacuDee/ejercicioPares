"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Por favor, ingresa la base (en cm.)");
var altura = readlineSync.questionInt("Por favor, ingresa la altura (en cm.)");
var calcularArea = base * altura;
console.log("El área del rectángulo es de " + calcularArea + " cm2.");
