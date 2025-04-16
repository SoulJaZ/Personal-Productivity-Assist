console.log("Hola Mundo");

    // Importar módulos.
const agregarTarea = require("./modules/agregarTarea");
const detenerTarea = require("./modules/detenerTarea");
const iniciarTarea = require("./modules/iniciarTarea");
const listarTarea = require("./modules/listarTarea");
const planearDia = require("./modules/planearDia");
const sincronizar = require("./modules/sincronizar");
const tareaCompletada = require("./modules/tareaCompletada");
const fs = require("fs");
const path = require("path");

// Crear ruta del archivo que se consumira para obtener la data de la aplicación.
const ARCHIVO_TAREAS_PERSONALES = path.join(__dirname, "tareas_Personales.json");


// Manejo de la entrada desde la línea de comandos. 
const argumentosMétodos = process.argv.slice(2);
const accion = argumentosMétodos[0];
const argumento1 = argumentosMétodos[1];
const argumento2 = argumentosMétodos.slice(2).join(' ');

if (accion === 'agregar-tarea') {
    agregarTarea();
} else if (accion === 'lista-tareas'){
    listarTarea();
} else if ( accion === 'tarea-completada') {
    tareaCompletada();
} else if ( accion === 'iniciar-tarea') {
    iniciarTarea();
} else if (accion === 'detener-tarea') {
    detenerTarea();
} else if (accion == 'planear-dia') {
    planearDia();
} else if (accion === 'sincronizar'){
    sincronizar();
}
else {
    console.log("Comando inválido.")
}