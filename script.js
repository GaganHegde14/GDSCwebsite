document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.card-track');
    const cards = document.querySelectorAll('.card');
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');
    const eventSlides = document.querySelectorAll('.event-slide');
    
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            // Enable scrolling after preloader
            document.body.style.overflow = 'visible';
        }, 2000); // Wait for 2 seconds before fading out
    });

    // Clone cards for infinite scroll
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    menuBtn.addEventListener('click', () => {
        navMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    // Add click handlers for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active'); // Close menu when link is clicked
        });
    });

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    // Observe both team and events titles
    const teamTitle = document.querySelector('.team-title');
    const eventsTitle = document.querySelector('.events-title');
    
    observer.observe(teamTitle);
    observer.observe(eventsTitle);
}); 