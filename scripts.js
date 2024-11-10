document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully!');

    // Smooth scroll behavior for nav links
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
