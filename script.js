document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (file) {
        const output = document.getElementById("output");
        output.innerText = "Cargando archivo...";

        // Aquí se subiría el archivo a Google Colab para procesarlo
        output.innerText = "Archivo procesado con éxito. Resultado del análisis: ... (Esta sección se completará luego)";
    } else {
        alert("Por favor, selecciona un archivo.");
    }
});
