document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Toggle between moon and sun icons
        const moonIcon = toggleButton.querySelector('.fa-moon');
        const sunIcon = toggleButton.querySelector('.fa-sun');

        if (body.classList.contains('dark-mode')) {
            // Dark mode is active, show sun icon
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline-block';
        } else {
            // Light mode is active, show moon icon
            moonIcon.style.display = 'inline-block';
            sunIcon.style.display = 'none';
        }
    });
});