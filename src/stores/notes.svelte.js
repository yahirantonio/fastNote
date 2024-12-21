import { readable, writable } from "svelte/store";

export const today = new Date().toLocaleDateString();

export let isNavbarOpen = writable(false);

export let states = readable([
   {
      estadoID: 0,
      estado: "En Progreso"
   },
   {
      estadoID: 1,
      estado: "Hecho"
   },
   {
      estadoID: 2,
      estado: "Por Hacer"
   },
]);

export const dataNotes = writable([
   {
      "notaID": 1,
      "titulo": "Ejemplo de título",
      "texto": "Este es el contenido de la nota.",
      "etiqueta": "Personal",
      "fecha": today,
      "content": { ops: [{ insert: 'Este es el contenido de la nota.\n' }] },
      "estadoID": 0
   },
   {
      "notaID": 2,
      "titulo": "Lista de compras",
      "texto": "Necesito comprar frutas, verduras, pan, leche, huevos y carne. También debo verificar si hay suficiente café en casa y, si no, añadirlo a la lista.",
      "etiqueta": "Personal",
      "fecha": today,
      "content": { ops: [{ insert: 'Necesito comprar frutas, verduras, pan, leche, huevos y carne. También debo verificar si hay suficiente café en casa y, si no, añadirlo a la lista.\n' }] },
      "estadoID": 1
   },
   {
      "notaID": 3,
      "titulo": "Planificación de proyecto",
      "texto": "El proyecto requiere coordinar varias tareas: asignación de roles, establecer fechas límite, y preparar reuniones semanales para el seguimiento. Es crucial definir el alcance y los entregables en la primera reunión.",
      "etiqueta": "Trabajo",
      "fecha": today,
      "content": { ops: [{ insert: 'El proyecto requiere coordinar varias tareas: asignación de roles, establecer fechas límite, y preparar reuniones semanales para el seguimiento. Es crucial definir el alcance y los entregables en la primera reunión.\n' }] },
      "estadoID": 2
   },
   {
      "notaID": 4,
      "titulo": "Ideas para el blog",
      "texto": "Investigar sobre temas actuales en tecnología como inteligencia artificial, ciberseguridad, y avances en desarrollo web. Preparar un borrador inicial para cada tema y buscar imágenes relevantes para ilustrar los artículos.",
      "etiqueta": "Creativo",
      "fecha": today,
      "content": { ops: [{ insert: 'Investigar sobre temas actuales en tecnología como inteligencia artificial, ciberseguridad, y avances en desarrollo web. Preparar un borrador inicial para cada tema y buscar imágenes relevantes para ilustrar los artículos.\n' }] },
      "estadoID": 2
   },
   {
      "notaID": 5,
      "titulo": "Rutina de ejercicio",
      "texto": "Crear una rutina de ejercicios semanal: lunes, miércoles y viernes para entrenamiento de fuerza; martes y jueves para cardio; y sábado para yoga. También debo recordar calentar antes de cada sesión y estirar al final.",
      "etiqueta": "Salud",
      "fecha": today,
      "content": { ops: [{ insert: 'Crear una rutina de ejercicios semanal: lunes, miércoles y viernes para entrenamiento de fuerza; martes y jueves para cardio; y sábado para yoga. También debo recordar calentar antes de cada sesión y estirar al final.\n' }] },
      "estadoID": 1
   },
   {
      "notaID": 6,
      "titulo": "Resumen de reunión",
      "texto": "En la reunión discutimos los puntos clave del proyecto: definir prioridades, delegar tareas específicas y acordar un cronograma inicial. La próxima reunión será el viernes para evaluar el progreso y ajustar el plan según sea necesario.",
      "etiqueta": "Trabajo",
      "fecha": today,
      "content": { ops: [{ insert: 'En la reunión discutimos los puntos clave del proyecto: definir prioridades, delegar tareas específicas y acordar un cronograma inicial. La próxima reunión será el viernes para evaluar el progreso y ajustar el plan según sea necesario.\n' }] },
      "estadoID": 0
   }
])