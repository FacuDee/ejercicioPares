/* Desarrolle un algoritmo que diga el precio de una compra. La compra se compone del precio del producto y la cantidad. Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10% */

import * as readlineSync from "readline-sync";

let precioProducto: number;
let cantidadProducto: number;
let precioFinal: number;

precioProducto = readlineSync.questionInt("Ingresa el precio del producto: ");

cantidadProducto = readlineSync.questionInt("Ingresa cuantas unidades del producto): ");

precioFinal = precioProducto * cantidadProducto;

console.log("El precio de su compra es de " + precioFinal)

if (precioFinal > 1000) {
    let descuento: number = precioFinal * 0.9;
    console.log("Como su compra superó los 1000, tiene un descuento de 10%. El precio final a pagar es de " + descuento);
};



