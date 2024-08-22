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

// Load PDF Functionality for Dashboard
function loadPDF(pdfFile) {
    const pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.src = pdfFile;
}
