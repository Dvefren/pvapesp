document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-glow');
    
    cards.forEach(card => {
        const glow = document.createElement('div');
        glow.classList.add('glow');
        card.appendChild(glow);

        card.addEventListener('mousemove', (e) => {
            const { clientX: mouseX, clientY: mouseY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = mouseX - left;
            const y = mouseY - top;
            const centerX = width / 2;
            const centerY = height / 2;
            const distX = Math.abs(centerX - x);
            const distY = Math.abs(centerY - y);
            const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
            const dist = Math.sqrt(distX * distX + distY * distY);
            const opacity = Math.max(0.1, 1 - (dist / maxDist));
            
            // Position the glow element to cover the entire card
            glow.style.transform = `translate(${x - glow.offsetWidth / 2}px, ${y - glow.offsetHeight / 2}px)`;
            glow.style.opacity = opacity;
        });

        card.addEventListener('mouseleave', () => {
            // Smoothly hide the glow when the mouse leaves
            glow.style.opacity = 0;
        });

        card.addEventListener('mouseenter', () => {
            // Smoothly show the glow when the mouse enters
            glow.style.opacity = 0.5;
        });
    });
});