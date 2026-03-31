function exportarPDF(nombreUsuario) {
    const contenedor = document.getElementById("rutina-contenedor");

    if (!contenedor || contenedor.innerHTML.trim() === "") {
        alert("No hay ejercicios para exportar");
        return;
    }

    const contenido = contenedor.innerHTML;
    const ventana = window.open('', '_blank');

    ventana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>FORCEGYM - ${nombreUsuario}</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }

                @page {
                    size: A4 landscape;
                    margin: 0;
                }

                body {
                    font-family: 'Inter', sans-serif;
                    background: #ffffff;
                    padding: 8mm 10mm;
                    color: #0f172a;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }

                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                    border-bottom: 2px solid #0f172a;
                    padding-bottom: 8px;
                }

                .brand {
                    font-size: 22px;
                    font-weight: 900;
                    color: #0f172a;
                    text-transform: uppercase;
                }
                .brand span { color: #f97316; }

                .user-name { font-weight: 800; color: #f97316; text-transform: uppercase; }

                .banner-tips {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 12px;
                    padding: 8px 12px;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 6px;
                    font-size: 8.5px;
                    line-height: 1.3;
                }

                .banner-tips strong { color: #f97316; text-transform: uppercase; }

                .wrapper-rutina {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 10px;
                    align-items: start;
                }

                .glass-card, .card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    overflow: hidden;
                    page-break-inside: avoid;
                }

                /* REFUERZO PARA QUE EL DÍA NO DESAPAREZCA */
                h3 {
                    display: block !important;
                    visibility: visible !important;
                    font-size: 11px;
                    font-weight: 800;
                    color: #000000 !important;
                    background: #ffffff !important;
                    padding: 8px !important;
                    text-transform: uppercase;
                    text-align: center;
                    border-bottom: 1px solid #f1f5f9;
                    margin: 0 !important;
                }

                .bg-white\\/50 {
                    border-bottom: 1px solid #f1f5f9;
                    padding: 6px 8px;
                }

                .font-bold {
                    font-size: 10px;
                    font-weight: 700;
                    color: #1e293b;
                    display: block;
                }

                .text-xs {
                    font-size: 8.5px;
                    color: #64748b;
                }

                /* ============================================ */
                /* DEPURACIÓN ESPECÍFICA SIN TOCAR LOS DÍAS */
                /* ============================================ */
                
                /* Ocultar Nivel */
                [class*="difficulty-"], 
                .difficulty-principiante, 
                .difficulty-intermedio, 
                .difficulty-avanzado {
                    display: none !important;
                }

                /* Ocultar "X EJERCICIOS" sin borrar el H3 */
                /* Buscamos el span que suele estar solo o con clases de badge */
                .card > span.bg-indigo-100,
                .card > span.text-indigo-600,
                .mb-4.flex.justify-between span:not(.font-bold) {
                    display: none !important;
                }

                /* Ocultar botones e iconos */
                button, i, .fa-times-circle, .fa-trash-alt, .opacity-0 {
                    display: none !important;
                }
            </style>
        </head>
        <body>
            <header>
                <div class="brand">FORCE<span>GYM</span></div>
                <div class="info-plan">
                    RUTINA SEMANAL / <span class="user-name">${nombreUsuario}</span>
                </div>
            </header>
            
            <div class="banner-tips">
                <div>
                    <strong>Seguridad:</strong> Calentá 5-10 min • Priorizá técnica • Hidratate • Controlá respiración.
                </div>
                <div>
                    <strong>Progreso:</strong> Descansá 60-90s • Registro semanal • Dormí +7hs • Consistencia > Intensidad.
                </div>
            </div>

            <div class="wrapper-rutina">
                ${contenido}
            </div>

            <script>
                window.onload = function() {
                    // Limpieza quirúrgica: solo borramos si el texto contiene 'EJERCICIO' o los niveles
                    // pero NUNCA si es un H3 (donde están los días)
                    document.querySelectorAll('span').forEach(el => {
                        const txt = el.innerText.toUpperCase();
                        const esNivel = txt.includes('PRINCIPIANTE') || txt.includes('INTERMEDIO') || txt.includes('AVANZADO');
                        const esContador = txt.includes('EJERCICIO');
                        
                        if ((esNivel || esContador) && el.tagName !== 'H3') {
                            el.style.display = 'none';
                        }
                    });

                    setTimeout(() => {
                        window.print();
                        window.close();
                    }, 400);
                }
            </script>
        </body>
        </html>
    `);

    ventana.document.close();
}