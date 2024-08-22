// Login Functionality
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulación de autenticación básica
    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

// Función para cargar archivos PDF en el visor
function loadPDF(pdfFile) {
    const viewer = document.getElementById("viewer");
    viewer.src = pdfFile;
}

// Función para cargar el reporte de Power BI
function loadPowerBIReport() {
    const powerBIUrl = "https://app.powerbi.com/reportEmbed?reportId=f7db1df7-d367-4bd3-ac08-2b79b8124875&autoAuth=true&ctid=516aa17e-60e3-41d2-b3ec-faceabaef3c9"; // Reemplaza con el enlace de tu reporte
    const viewer = document.getElementById("viewer");
    viewer.src = powerBIUrl;
}

