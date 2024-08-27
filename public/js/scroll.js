document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#imageContainer');
    if (!container) {
        console.error('The element with ID "imageContainer" was not found.');
        return;
    }

    const images = Array.from(container.querySelectorAll('img'));
    if (images.length === 0) {
        console.error('No images found in the imageContainer.');
        return;
    }

    let currentIndex = 0;
    let lastScrollTop = 0;
    let isAnimating = false;
    let requestId = null;

    // Inicialmente mostrar solo la primera imagen
    images.forEach((img, index) => {
        img.style.opacity = index === 0 ? '1' : '0';
    });

    function updateImage() {
        images.forEach((img, index) => {
            img.style.opacity = index === currentIndex ? '1' : '0';
        });
    }

    function handleScroll() {
        // Cancelar cualquier animación pendiente
        if (requestId) {
            cancelAnimationFrame(requestId);
        }

        // Usar requestAnimationFrame para gestionar la animación
        requestId = requestAnimationFrame(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Desplazamiento hacia abajo
                if (currentIndex < images.length - 1) {
                    currentIndex = (currentIndex + 1) % images.length;
                }
            } else {
                // Desplazamiento hacia arriba
                if (currentIndex > 0) {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                }
            }

            if (!isAnimating) {
                isAnimating = true;
                updateImage();
                isAnimating = false;
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para desplazamiento en dispositivos móviles o negativo
        });
    }

    // Aplicar debounce a handleScroll para limitar la frecuencia de las actualizaciones
    let debounceTimeout;
    function debounce(func, delay) {
        return function(...args) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => func(...args), delay);
        };
    }

    window.addEventListener('scroll', debounce(handleScroll, 100)); // Ajusta el retraso según sea necesario
});
