const slide = document.querySelector('.slide');
const container = document.getElementById('sliderContainer');

// Función para pasar a la siguiente tarjeta
function nextSlide() {
    const items = document.querySelectorAll('.item');
    slide.appendChild(items[0]);
}

// Intervalo automático cada 3.5 segundos
let autoPlay = setInterval(nextSlide, 3500);

// Pausa al pasar el mouse (Desktop)
container.addEventListener('mouseenter', () => clearInterval(autoPlay));
container.addEventListener('mouseleave', () => autoPlay = setInterval(nextSlide, 3500));

// Soporte para gestos táctiles en celulares
let touchStartX = 0;
let touchEndX = 0;

container.addEventListener('touchstart', (e) => {
    clearInterval(autoPlay);
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    
    // Si desliza a la izquierda -> Siguiente
    if (touchStartX - touchEndX > 50) {
        nextSlide();
    }
    // Reanudar desplazamiento automático
    autoPlay = setInterval(nextSlide, 3500);
}, { passive: true });
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        // Al hacer clic en el botón hamburguesa
        navToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            navToggle.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');
        });

        // Cerrar el menú si se hace clic fuera de la barra
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                navToggle.classList.remove('is-active');
                navMenu.classList.remove('is-active');
            }
        });

        // Cerrar el menú al hacer clic en el enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('is-active');
                navMenu.classList.remove('is-active');
            });
        });
    }
});