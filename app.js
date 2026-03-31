// ============================================
// LÓGICA DE LA APLICACIÓN
// ============================================

// Cargar datos de LocalStorage o iniciar vacío
let rutinaSemanal = JSON.parse(localStorage.getItem('gymFlow_data')) || {
    Lunes: [], Martes: [], Miércoles: [], Jueves: [], Viernes: [], Sábado: [], Domingo: []
};

document.addEventListener('DOMContentLoaded', () => {
    poblarGrupos();
    renderizarRutina();
});

// Llena el select de grupos musculares desde data.js
function poblarGrupos() {
    const selectGrupo = document.getElementById('select-grupo');
    GRUPOS_LISTA.forEach(grupo => {
        const option = document.createElement('option');
        option.value = grupo.id;
        option.textContent = `${grupo.nombre}`;
        selectGrupo.appendChild(option);
    });
}

// Filtra y carga ejercicios según el grupo seleccionado
function cargarEjerciciosPorGrupo() {
    const grupoId = document.getElementById('select-grupo').value;
    const selectEjer = document.getElementById('select-ejercicio');
    selectEjer.innerHTML = '<option value="">Selecciona Ejercicio...</option>';

    if (!grupoId) return;

    const filtrados = ejerciciosData.filter(e => e.grupo === grupoId);
    filtrados.forEach(ej => {
        const option = document.createElement('option');
        option.value = ej.nombre;
        option.textContent = ej.nombre;
        selectEjer.appendChild(option);
    });
}

// Agrega el ejercicio al día correspondiente
function agregarEjercicio() {
    const dia = document.getElementById('select-dia').value;
    const nombreEjer = document.getElementById('select-ejercicio').value;
    const objetivo = document.getElementById('select-objetivo').value;
    const nivel = document.getElementById('select-nivel').value;

    if (!nombreEjer) {
        alert("⚠️ Por favor, selecciona un ejercicio.");
        return;
    }

    const infoBase = ejerciciosData.find(e => e.nombre === nombreEjer);
    const config = configuracionSeries[objetivo][nivel];

    const nuevoEjercicio = {
        ...infoBase,
        id: Date.now(),
        series: config.series,
        reps: config.repeticiones
    };

    rutinaSemanal[dia].push(nuevoEjercicio);
    actualizarApp();
}

// Elimina un ejercicio específico
function eliminarEjercicio(dia, id) {
    rutinaSemanal[dia] = rutinaSemanal[dia].filter(e => e.id !== id);
    actualizarApp();
}

// Borra todo el plan
function borrarTodaLaSemana() {
    if (confirm("¿Estás seguro de que quieres borrar todo el plan semanal?")) {
        rutinaSemanal = { Lunes: [], Martes: [], Miércoles: [], Jueves: [], Viernes: [], Sábado: [], Domingo: [] };
        actualizarApp();
    }
}

// Guarda en LocalStorage y vuelve a dibujar la interfaz
function actualizarApp() {
    localStorage.setItem('gymFlow_data', JSON.stringify(rutinaSemanal));
    renderizarRutina();
}

// Dibuja las tarjetas en el HTML
function renderizarRutina() {
    const contenedor = document.getElementById('rutina-contenedor');
    contenedor.innerHTML = '';

    const dias = Object.keys(rutinaSemanal);
    let tieneContenido = false;

    dias.forEach(dia => {
        if (rutinaSemanal[dia].length === 0) return;
        tieneContenido = true;

        const cardDia = document.createElement('div');
        cardDia.className = "glass-card p-5 rounded-2xl shadow-sm border-l-4 border-l-orange-500 animate-in fade-in duration-500";
        
        let ejerciciosHtml = rutinaSemanal[dia].map(ej => `
            <div class="flex justify-between items-start p-3 bg-white/50 rounded-xl mb-2 group border border-transparent hover:border-orange-100 transition-all">
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <span class="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded difficulty-${ej.dificultad}">
                            ${ej.dificultad}
                        </span>
                    </div>
                    <p class="font-bold text-gray-800 text-sm">${ej.nombre}</p>
                    <p class="text-xs text-orange-600 font-medium mt-1">
                        <i class="fas fa-layer-group mr-1 text-orange-300"></i> ${ej.series} x ${ej.reps}
                        <span class="text-gray-300 mx-1">|</span>
                        <i class="fas fa-dumbbell mr-1 text-orange-300"></i> <span class="capitalize">${ej.equipamiento}</span>
                    </p>
                </div>
                <button onclick="eliminarEjercicio('${dia}', ${ej.id})" class="text-gray-300 hover:text-red-500 transition-colors">
                    <i class="fas fa-times-circle"></i>
                </button>
            </div>
        `).join('');

        cardDia.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold text-lg text-gray-800">${dia}</h3>
                <span class="text-[10px] bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-bold">
                    ${rutinaSemanal[dia].length} EJERCICIOS
                </span>
            </div>
            <div class="max-h-[400px] overflow-y-auto custom-scrollbar pr-1">
                ${ejerciciosHtml}
            </div>
        `;
        contenedor.appendChild(cardDia);
    });

    if (!tieneContenido) {
        contenedor.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
                <i class="fas fa-calendar-plus text-5xl mb-4 opacity-20"></i>
                <p class="text-lg font-light">Aún no has planeado ningún día.</p>
                <p class="text-sm italic">Usa el panel de la izquierda para comenzar.</p>
            </div>
        `;
    }
}