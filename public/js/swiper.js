document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('brandsSlider');
    const slides = Array.from(slider.querySelectorAll('.slider-slide'));
    const slideWidth = slides[0].offsetWidth;

    // Duplica los slides para crear un efecto de desplazamiento infinito
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
    });
});
