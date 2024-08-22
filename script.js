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
    const powerBIUrl = "https://app.powerbi.com/view?r=tu_link_aqui"; // Reemplaza con el enlace de tu reporte
    const viewer = document.getElementById("viewer");
    viewer.src = powerBIUrl;
}

