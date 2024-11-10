document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const output = document.getElementById("output");

    if (file) {
        output.innerText = "Cargando archivo...";

        // Simulación del proceso de análisis
        setTimeout(() => {
            loadAnalysisResults();
        }, 2000); // Simula el tiempo de procesamiento
    } else {
        alert("Por favor, selecciona un archivo.");
    }
});

// Función para cargar y mostrar el análisis desde el JSON
async function loadAnalysisResults() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/wilshire1963/analisis-sentencias/main/resultados_analisis_bigbird.json');
        const data = await response.json();

        // Mostrar los resultados en formato legible
        const output = document.getElementById("output");
        output.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error al cargar los resultados del análisis:", error);
        alert("Hubo un error al cargar los resultados del análisis.");
    }
}
