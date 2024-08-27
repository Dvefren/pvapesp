window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const images = document.querySelectorAll('.image-wrapper img');

    images.forEach((img, index) => {
        img.style.transform = `translateY(-${scrollPosition * (0.5 + index * 0.1)}px)`;
    });
});
