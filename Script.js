// This script adds a smooth scroll effect to the page links

document.addEventListener('DOMContentLoaded', function () {
    // Select all the anchor tags in the navigation
    const navLinks = document.querySelectorAll('nav a');

    // Loop through each link and add an event listener
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Get the target section from the href attribute
            const targetSection = document.querySelector(this.getAttribute('href'));

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// Display an alert when the "Contact" section is clicked
document.querySelector('#contact').addEventListener('click', function () {
    alert('Contact us at example@website.com!');
});
