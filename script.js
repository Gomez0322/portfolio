document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("project-title");
    const bar = document.getElementById("myBar");
    const status = document.getElementById("status");

    // 1. Efecto de escritura para el título
    let text = "Panificadora Abraham";
    let i = 0;
    title.innerHTML = "";
    
    function typeWriter() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // 2. Animación de la barra de progreso
    let width = 0;
    const targetWidth = 10; // El porcentaje real de tu proyecto
    
    const interval = setInterval(() => {
        if (width >= targetWidth) {
            clearInterval(interval);
            status.innerText = "historias de usuarios";
            status.style.color = "#3498db";
        } else {
            width++;
            bar.style.width = width + "%";
            bar.innerHTML = width + "%";
        }
    }, 30);
});