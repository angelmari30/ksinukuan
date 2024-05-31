document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const headerNav = document.querySelector('.header-nav');

    toggleButton.addEventListener('click', function() {
        headerNav.classList.toggle('active');
    });
});
