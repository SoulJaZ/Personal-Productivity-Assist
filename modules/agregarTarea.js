    // Importar módulos.
const fs = require("fs");
const path = require("path");

// Crear ruta del archivo que se consumira para obtener la data de la aplicación.
const ARCHIVO_TAREAS_PERSONALES = path.join(__dirname, "..", "tareas_Personales.json");

function agregarTarea() {
    console.log("Agregar Tarea")
}


module.exports = agregarTarea
