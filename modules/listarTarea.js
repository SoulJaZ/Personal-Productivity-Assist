    // Importar módulos.
const fs = require("fs");
const path = require("path");

// Crear ruta del archivo que se consumira para obtener la data de la aplicación.
const ARCHIVO_TAREAS_PERSONALES = path.join(__dirname, "..", "tareas_Personales.json");


// Condicional que verifica si no es verdadero que existe alguna tarea en el archivo JSON.
if (!fs.existsSync(ARCHIVO_TAREAS_PERSONALES)) {
    console.log("No hay tareas. ")
}

function listarTarea() {
    console.log("Listar Tarea.")
}
module.exports = listarTarea;