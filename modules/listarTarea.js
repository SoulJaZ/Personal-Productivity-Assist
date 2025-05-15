    // Importar módulos.
const fs = require("fs");
const path = require("path");

// Crear ruta del archivo que se consumira para obtener la data de la aplicación.
const ARCHIVO_TAREAS_PERSONALES = path.join(__dirname, "..", "tareas_Personales.json");

function listarTarea() {
    console.log("Listar Tarea.")

    // Condicional que verifica si no es verdadero que existe alguna tarea en el archivo JSON.
    if (!fs.existsSync(ARCHIVO_TAREAS_PERSONALES)) {
        console.log("No hay tareas. ");
        return;
    }

    try {
        const data = fs.readFileSync(ARCHIVO_TAREAS_PERSONALES, "utf-8").trim(); // ruta de carpeta que contiene las tareas. 

        if (!data) {
            console.log("🥊 Archivo vacio");
            return;
        }

        const tareas = JSON.parse(data);

        if (!Array.isArray(tareas) || tareas.length === 0) {
            console.log("🦊 No hay tareas para mostrar");
            return;
        }

        tareas.forEach((tarea, index) => {
            console.log(`\n✏ Tarea #${index + 1} `);
            console.log(`📓 Nombre: ${tarea.nombre}`);
            console.log(`🏷️  Etiquetas: ${tarea.etiquetas.join(", ")}`);
            console.log(`⏳ Estado: ${tarea.estado}`);
            console.log(`📅 Creada: ${tarea.creada}`);
        })
        // con un elemento vació se representan las tareas, que almacena las tareas.

    } catch (error) {
        console.error("Error al obtener artículos:", error);
        return [];
    }
}
module.exports = listarTarea;