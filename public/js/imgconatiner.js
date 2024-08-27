document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.titles h3');
    const vapesImage = document.getElementById('vapesImage');

    titles.forEach(title => {
        title.addEventListener('mouseover', () => {
            // Cambia la fuente de la imagen según el atributo `data-image` del título
            const imageUrl = title.getAttribute('data-image');
            const gradientClass = title.getAttribute('data-gradient');
            
            vapesImage.src = imageUrl;
            document.querySelector('.images-container').className = `images-container ${gradientClass}`;
            
            // Elimina la clase 'active' de todos los títulos
            titles.forEach(t => t.classList.remove('active'));
            
            // Añade la clase 'active' al título actual
            title.classList.add('active');
        });
    });
});
