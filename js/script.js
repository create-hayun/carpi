document.addEventListener('DOMContentLoaded', () => {
  const slide = document.querySelector('.slide');
  let timer = null;
  const INTERVAL_TIME = 3000; // Avanza cada 3 segundos

  function moveNext() {
    const items = slide.querySelectorAll('.item');
    if (items.length > 0) {
      slide.appendChild(items[0]);
    }
  }

  function movePrev() {
    const items = slide.querySelectorAll('.item');
    if (items.length > 0) {
      slide.prepend(items[items.length - 1]);
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(moveNext, INTERVAL_TIME);
  }

  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // Deslizamiento táctil con el dedo para celulares/tablets
  let touchStartX = 0;
  let touchEndX = 0;
  const container = document.querySelector('.container');

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 40) {
      moveNext();
      startAutoPlay();
    } else if (touchEndX - touchStartX > 40) {
      movePrev();
      startAutoPlay();
    }
  }, { passive: true });

  // Iniciar la reproducción automática
  startAutoPlay();
});