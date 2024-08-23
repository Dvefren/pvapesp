document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeButton');
    const menuOverlay = document.getElementById('menuOverlay');

    menuButton.addEventListener('click', () => {
        menuOverlay.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });

    menuOverlay.addEventListener('click', (event) => {
        if (event.target === menuOverlay) {
            menuOverlay.classList.remove('active');
        }
    });
});
