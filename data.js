// ============================================
// RUTINAS GYM - BASE DE DATOS DE EJERCICIOS
// ============================================

// GRUPOS MUSCULARES
const GRUPOS_MUSCULARES = {
    pecho: "Pecho",
    espalda: "Espalda",
    pierna: "Pierna",
    hombro: "Hombro",
    biceps: "Bíceps",
    triceps: "Tríceps",
    abdominales: "Abdomen / Core",
    gluteos: "Glúteos",
    fullbody: "Cuerpo completo"
};

// LISTA DE GRUPOS PARA SELECCIÓN
const GRUPOS_LISTA = [
    { id: "pecho", nombre: "Pecho", icono: "fa-chevron-up" },
    { id: "espalda", nombre: "Espalda", icono: "fa-chevron-down" },
    { id: "pierna", nombre: "Pierna", icono: "fa-walking" },
    { id: "hombro", nombre: "Hombro", icono: "fa-arrow-up" },
    { id: "biceps", nombre: "Bíceps", icono: "fa-hand-peace" },
    { id: "triceps", nombre: "Tríceps", icono: "fa-hand-back-fist" },
    { id: "abdominales", nombre: "Abdominales", icono: "fa-bicycle" },
    { id: "gluteos", nombre: "Glúteos", icono: "fa-person-walking-arrow-right" },
    { id: "fullbody", nombre: "Full Body", icono: "fa-person-running" }
];

// ============================================
// BIBLIOTECA DE EJERCICIOS
// ============================================

const ejerciciosData = [
    // PECHO
    { nombre: "Press de banca plano", grupo: "pecho", categoria: "fuerza", dificultad: "intermedio", equipamiento: "barra, banco" },
    { nombre: "Press de banca inclinado", grupo: "pecho", categoria: "hipertrofia", dificultad: "intermedio", equipamiento: "barra, banco" },
    { nombre: "Press con mancuernas plano", grupo: "pecho", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuernas, banco" },
    { nombre: "Press con mancuernas inclinado", grupo: "pecho", categoria: "hipertrofia", dificultad: "intermedio", equipamiento: "mancuernas, banco" },
    { nombre: "Aperturas con mancuernas", grupo: "pecho", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuernas, banco" },
    { nombre: "Fondos en paralelas", grupo: "pecho", categoria: "fuerza", dificultad: "avanzado", equipamiento: "paralelas" },
    { nombre: "Flexiones de pecho", grupo: "pecho", categoria: "funcional", dificultad: "principiante", equipamiento: "ninguno" },
    { nombre: "Flexiones diamante", grupo: "pecho", categoria: "hipertrofia", dificultad: "intermedio", equipamiento: "ninguno" },
    { nombre: "Pec deck", grupo: "pecho", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "máquina" },
    { nombre: "Press en máquina", grupo: "pecho", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "máquina" },
    
    // ESPALDA
    { nombre: "Dominadas", grupo: "espalda", categoria: "fuerza", dificultad: "avanzado", equipamiento: "barra" },
    { nombre: "Dominadas asistidas", grupo: "espalda", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "máquina asistida" },
    { nombre: "Remo con barra", grupo: "espalda", categoria: "fuerza", dificultad: "intermedio", equipamiento: "barra" },
    { nombre: "Remo con mancuerna", grupo: "espalda", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuerna, banco" },
    { nombre: "Jalón al pecho", grupo: "espalda", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "polea" },
    { nombre: "Jalón en polea baja", grupo: "espalda", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "polea" },
    { nombre: "Peso muerto", grupo: "espalda", categoria: "fuerza", dificultad: "avanzado", equipamiento: "barra" },
    { nombre: "Face pull", grupo: "espalda", categoria: "resistencia", dificultad: "principiante", equipamiento: "polea, cuerda" },
    { nombre: "Pull over", grupo: "espalda", categoria: "hipertrofia", dificultad: "intermedio", equipamiento: "mancuerna, banco" },
    { nombre: "Remo en máquina", grupo: "espalda", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "máquina" },
    
    // PIERNA
    { nombre: "Sentadilla libre", grupo: "pierna", categoria: "fuerza", dificultad: "intermedio", equipamiento: "barra" },
    { nombre: "Sentadilla hack", grupo: "pierna", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "máquina" },
    { nombre: "Prensa de piernas", grupo: "pierna", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "máquina" },
    { nombre: "Peso muerto rumano", grupo: "pierna", categoria: "fuerza", dificultad: "intermedio", equipamiento: "barra" },
    { nombre: "Extensiones de cuádriceps", grupo: "pierna", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "máquina" },
    { nombre: "Curl femoral", grupo: "pierna", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "máquina" },
    { nombre: "Zancadas", grupo: "pierna", categoria: "funcional", dificultad: "principiante", equipamiento: "mancuernas" },
    { nombre: "Sentadilla búlgara", grupo: "pierna", categoria: "resistencia", dificultad: "intermedio", equipamiento: "mancuernas, banco" },
    { nombre: "Elevaciones de talones", grupo: "pierna", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "máquina" },
    { nombre: "Sentadilla con mancuerna", grupo: "pierna", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuernas" },
    
    // GLÚTEOS
    { nombre: "Hip thrust", grupo: "gluteos", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "barra, banco" },
    { nombre: "Puente de glúteos", grupo: "gluteos", categoria: "funcional", dificultad: "principiante", equipamiento: "ninguno" },
    { nombre: "Patada de glúteo en polea", grupo: "gluteos", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "polea" },
    { nombre: "Abducción de cadera", grupo: "gluteos", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "máquina" },
    
    // HOMBRO
    { nombre: "Press militar con barra", grupo: "hombro", categoria: "fuerza", dificultad: "intermedio", equipamiento: "barra" },
    { nombre: "Press militar con mancuernas", grupo: "hombro", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuernas" },
    { nombre: "Elevaciones laterales", grupo: "hombro", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuernas" },
    { nombre: "Elevaciones frontales", grupo: "hombro", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuernas" },
    { nombre: "Pájaro (posterior)", grupo: "hombro", categoria: "resistencia", dificultad: "principiante", equipamiento: "mancuernas" },
    { nombre: "Press Arnold", grupo: "hombro", categoria: "hipertrofia", dificultad: "intermedio", equipamiento: "mancuernas" },
    { nombre: "Encogimientos de hombros", grupo: "hombro", categoria: "fuerza", dificultad: "principiante", equipamiento: "mancuernas/barra" },
    
    // BÍCEPS
    { nombre: "Curl con barra", grupo: "biceps", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "barra" },
    { nombre: "Curl con mancuernas", grupo: "biceps", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuernas" },
    { nombre: "Curl martillo", grupo: "biceps", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuernas" },
    { nombre: "Curl en polea baja", grupo: "biceps", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "polea" },
    { nombre: "Curl predicador", grupo: "biceps", categoria: "hipertrofia", dificultad: "intermedio", equipamiento: "máquina/banco" },
    { nombre: "Curl concentrado", grupo: "biceps", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuerna, banco" },
    
    // TRÍCEPS
    { nombre: "Press francés", grupo: "triceps", categoria: "hipertrofia", dificultad: "intermedio", equipamiento: "barra, banco" },
    { nombre: "Extensión de tríceps en polea", grupo: "triceps", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "polea" },
    { nombre: "Fondos en banco", grupo: "triceps", categoria: "resistencia", dificultad: "principiante", equipamiento: "banco" },
    { nombre: "Patada de tríceps", grupo: "triceps", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuerna, banco" },
    { nombre: "Press con barra cerrado", grupo: "triceps", categoria: "fuerza", dificultad: "intermedio", equipamiento: "barra, banco" },
    { nombre: "Extensión por encima de la cabeza", grupo: "triceps", categoria: "hipertrofia", dificultad: "principiante", equipamiento: "mancuerna" },
    
    // ABDOMINALES / CORE
    { nombre: "Plancha", grupo: "abdominales", categoria: "funcional", dificultad: "principiante", equipamiento: "ninguno" },
    { nombre: "Crunches", grupo: "abdominales", categoria: "resistencia", dificultad: "principiante", equipamiento: "ninguno" },
    { nombre: "Elevación de piernas", grupo: "abdominales", categoria: "resistencia", dificultad: "intermedio", equipamiento: "ninguno" },
    { nombre: "Russian twist", grupo: "abdominales", categoria: "funcional", dificultad: "principiante", equipamiento: "disco/mancuerna" },
    { nombre: "Bicicleta", grupo: "abdominales", categoria: "resistencia", dificultad: "principiante", equipamiento: "ninguno" },
    { nombre: "Plancha lateral", grupo: "abdominales", categoria: "funcional", dificultad: "principiante", equipamiento: "ninguno" },
    { nombre: "Abdominales en polea", grupo: "abdominales", categoria: "fuerza", dificultad: "intermedio", equipamiento: "polea" },
    { nombre: "V-ups", grupo: "abdominales", categoria: "resistencia", dificultad: "intermedio", equipamiento: "ninguno" },
    
    // FULLBODY / FUNCIONAL
    { nombre: "Burpees", grupo: "fullbody", categoria: "funcional", dificultad: "intermedio", equipamiento: "ninguno" },
    { nombre: "Kettlebell swing", grupo: "fullbody", categoria: "funcional", dificultad: "intermedio", equipamiento: "kettlebell" },
    { nombre: "Saltos al cajón", grupo: "fullbody", categoria: "fuerza", dificultad: "avanzado", equipamiento: "cajón" },
    { nombre: "Mountain climbers", grupo: "fullbody", categoria: "resistencia", dificultad: "principiante", equipamiento: "ninguno" },
    { nombre: "Clean", grupo: "fullbody", categoria: "fuerza", dificultad: "avanzado", equipamiento: "barra" },
    { nombre: "Thruster", grupo: "fullbody", categoria: "funcional", dificultad: "intermedio", equipamiento: "barra/mancuernas" }
];

// Configuración de series y repeticiones por objetivo y dificultad
const configuracionSeries = {
    hipertrofia: {
        principiante: { series: 3, repeticiones: "10-12" },
        intermedio: { series: 4, repeticiones: "8-12" },
        avanzado: { series: 4, repeticiones: "8-10" }
    },
    definicion: {
        principiante: { series: 3, repeticiones: "12-15" },
        intermedio: { series: 3, repeticiones: "15-20" },
        avanzado: { series: 4, repeticiones: "15-20" }
    },
    fuerza: {
        principiante: { series: 3, repeticiones: "5-6" },
        intermedio: { series: 4, repeticiones: "3-5" },
        avanzado: { series: 5, repeticiones: "1-3" }
    },
    resistencia: {
        principiante: { series: 3, repeticiones: "15-20" },
        intermedio: { series: 3, repeticiones: "20-25" },
        avanzado: { series: 4, repeticiones: "25-30" }
    },
    funcional: {
        principiante: { series: 3, repeticiones: "10-12" },
        intermedio: { series: 3, repeticiones: "12-15" },
        avanzado: { series: 4, repeticiones: "15-20" }
    }
};