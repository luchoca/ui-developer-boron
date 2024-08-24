document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
});

/* Estilos dinámicos para el menú hamburguesa */
let currentSlide = 0;
const slides = ["OportunidadLaboral Llamado abierto para sumarse al equipo de @Boronstudio master digital.👩‍💻👨‍💻Más información 👉https://bit.ly/2OobIHS", "Texto del slider 2", "Texto del slider 3"];

function changeSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    document.getElementById('slider-text').innerText = slides[currentSlide];
}
document.addEventListener("DOMContentLoaded", function () {
    const marquees = document.querySelectorAll('.marquee');

    marquees.forEach((marquee, index) => {
        marquee.style.animationDuration = `${10 + index * 2}s`; // Modifica la duración de la animación para cada marquesina
    });
});