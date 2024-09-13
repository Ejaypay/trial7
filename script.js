document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const targetPage = this.getAttribute('href');
            window.location.href = targetPage; 
        });
    });

    
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.borderColor = 'gold'; 
        });
        img.addEventListener('mouseout', function() {
            this.style.borderColor = '#fff'; 
        });
    });
});
