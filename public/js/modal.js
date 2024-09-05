// Get the modal

document.addEventListener('DOMContentLoaded', () => {
    const createPButton = document.getElementById('createV');
    const modal = document.getElementById('modal-container');
    const closeButton = document.querySelector('.close-button');
    const cancelButton = document.querySelector('.btn.Cancel');

    createPButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});