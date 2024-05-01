"use strict";
/* Desarrolle un algoritmo que diga el precio de una compra. La compra se compone del precio del producto y la cantidad. Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10% */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioProducto;
var cantidadProducto;
var precioFinal;
precioProducto = readlineSync.questionInt("Ingresa el precio del producto: ");
cantidadProducto = readlineSync.questionInt("Ingresa cuantas unidades del producto): ");
precioFinal = precioProducto * cantidadProducto;
console.log("El precio de su compra es de " + precioFinal);
if (precioFinal > 1000) {
    var descuento = precioFinal * 0.9;
    console.log("Como su compra superó los 1000, tiene un descuento de 10%. El precio final a pagar es de " + descuento);
}
;
