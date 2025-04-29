    // Importar módulos.
const fs = require("fs");
const path = require("path");

// Crear ruta del archivo que se consumira para obtener la data de la aplicación.
const ARCHIVO_TAREAS_PERSONALES = path.join(__dirname, "..", "tareas_Personales.json");

// Función para agregar tarea. 
function agregarTarea(nombreTarea = "Task without name", etiquetas = []) {
    console.log("Agregar Tarea")

    // crear arreglo vacio para almacenar la data. 
    let tareas = []

    // Leer archivo si existe
    if (fs.existsSync(ARCHIVO_TAREAS_PERSONALES)) {
        const data = fs.readFileSync(ARCHIVO_TAREAS_PERSONALES, "utf-8");
        try {
            tareas = JSON.parse(data);
        } catch (e) {
            console.error("⚠ Error al parsear tareas", e.message)
        }
    }

    const nuevaTarea = {
        id: Date.now(),
        nombre: nombreTarea,
        estado: "pendiente",
        creada: new Date().toISOString(),
        iniciada: null,
        detenida: null,
        duracion_total_segundos: 0,
        etiquetas
    };

    
    tareas.push(nuevaTarea); // ← Esto estaba vacío, no agregaba nada.

    // Guardar
    fs.writeFileSync(ARCHIVO_TAREAS_PERSONALES, JSON.stringify(tareas, null, 2), "utf-8");
    console.log("✔ Tarea Agregada con éxito:", nuevaTarea.nombre);
    console.log(`📝 ${nuevaTarea.nombre}`);
}


module.exports = agregarTarea
