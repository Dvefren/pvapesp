document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const activeIndicator = document.createElement('div');

    // Estilo para el indicador activo
    activeIndicator.style.position = 'absolute';
    activeIndicator.style.bottom = '0';
    activeIndicator.style.left = '0';
    activeIndicator.style.width = '0';
    activeIndicator.style.height = '100%';
    activeIndicator.style.backgroundColor = 'yellow';
    activeIndicator.style.borderRadius = '30px';
    activeIndicator.style.transform = 'scaleX(0)';
    activeIndicator.style.transformOrigin = 'left';
    activeIndicator.style.transition = 'transform 0.5s ease';
    activeIndicator.style.zIndex = '-1';

    const nav = document.querySelector('nav');
    nav.style.position = 'relative';
    nav.appendChild(activeIndicator);

    function updateIndicator(link) {
        const linkRect = link.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        const offset = linkRect.left - navRect.left;
        const width = linkRect.width;
        activeIndicator.style.transform = `translateX(${offset}px) scaleX(1)`;
        activeIndicator.style.width = `${width}px`;
    }

    links.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            updateIndicator(e.target);
        });

        link.addEventListener('focus', (e) => {
            updateIndicator(e.target);
        });
    });

    // Manejar el enlace activo por defecto
    const initialLink = document.querySelector('nav ul li a');
    if (initialLink) {
        updateIndicator(initialLink);
    }
});
