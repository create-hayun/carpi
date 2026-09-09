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