var modalButtons = document.querySelectorAll('.open-modal');
    
modalButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modalId = button.getAttribute('data-target');
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

var closeButtons = document.querySelectorAll('.modal .close');
closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        var modal = this.parentElement.parentElement;
        modal.style.display = "none";
    });
});

window.addEventListener('click', function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});