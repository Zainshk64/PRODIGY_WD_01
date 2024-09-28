// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 123, 255, 0.8)'; // Change to a semi-transparent blue
    } else {
        navbar.style.background = 'linear-gradient(to right, #007bff, #00aaff)'; // Original gradient
    }
});
