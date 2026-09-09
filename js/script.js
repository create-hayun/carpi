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
