// Get modal element
var modal = document.getElementById("contactModal");

// Get the link that opens the modal
var contactLink = document.getElementById("contactLink");

// Get the close icon
var closeModal = document.querySelector(".close");

// When the user clicks the contact link, open the modal
contactLink.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the close icon, close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
