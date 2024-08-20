document.querySelectorAll('.bento-box[data-hover-image]').forEach(box => {
    const originalBackground = box.style.backgroundImage;
    const hoverImage = box.getAttribute('data-hover-image');

    box.addEventListener('mouseenter', () => {
        box.style.backgroundImage = `url(${hoverImage})`;
    });

    box.addEventListener('mouseleave', () => {
        box.style.backgroundImage = originalBackground;
    });
});
