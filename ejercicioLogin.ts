/* Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la contraseña adecuada. Considerar que tanto el usuario como la contraseña están formados sólo por letras. El sistema deberá validar que el usuario y la contraseña sean correctas, comparándolas con lo que el sistema tiene registrado para ese usuario. Tenga en cuenta que el sistema tiene registrado el usuario: Juan y la clave claveJuan */

import * as readlineSync from "readline-sync";

let usuario: string = readlineSync.question("Por favor, ingresa tu usuario: ");

let clave: string = readlineSync.question("Por favor, ingresa tu clave: ");

if (usuario == "Juan" && clave == "claveJuan") {
    console.log("Ingreso válido: ¡bienvenido a tu cuenta!");
} else {
    console.log("El usuario o la contraseña son incorrectas");
};

