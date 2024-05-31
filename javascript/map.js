document.querySelector('.store').addEventListener('click', function(event) {
    event.preventDefault();
    window.open(this.getAttribute('href'), '_blank');
});