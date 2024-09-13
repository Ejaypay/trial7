document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetPage = this.getAttribute('href');
            window.location.href = targetPage; // Navigate to the target page
        });
    });

    // Gallery image hover effect
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.borderColor = 'gold'; // Change border color on hover
        });
        img.addEventListener('mouseout', function() {
            this.style.borderColor = '#fff'; // Reset border color on mouse out
        });
    });
});
