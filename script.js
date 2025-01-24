// Function to toggle FAQ items
function toggleFaq(element) {
    const faqItem = element.parentNode;
    const isActive = faqItem.classList.contains('active');

    // Close all open FAQs
    const allFaqs = document.querySelectorAll('.faq-item');
    allFaqs.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.icon').textContent = '+'; // Reset icon
    });

    // Toggle the clicked FAQ
    if (!isActive) {
        faqItem.classList.add('active');
        element.querySelector('.icon').textContent = '×'; // Change plus to cross
    } else {
        element.querySelector('.icon').textContent = '+'; // Change back to plus
    }
}

// Intersection Observer to handle visibility of elements
function createObserver(targetSelector, threshold = 0.15) {
    const target = document.querySelector(targetSelector);

    if (target) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Add 'visible' class when in view
                }
            });
        }, { threshold });

        observer.observe(target);
    }
}

// Create observers for different sections
createObserver(".right-section-box");
createObserver(".about");
createObserver(".test-right");
createObserver(".benefits");
createObserver(".TESTIMONIAL");








// Add visibility class when elements come into view
function observeServicesSection() {
    const serviceItems = document.querySelectorAll('.services-desc-with-imgs');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add 'visible' class
            }
        });
    }, { threshold: 0.2 });

    // Observe each service item
    serviceItems.forEach((item) => observer.observe(item));
}

// Smooth scrolling for "Learn More" buttons
function enableSmoothScrolling() {
    const learnMoreButtons = document.querySelectorAll('.service-learn-more, .service-btn');

    learnMoreButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = document.getElementById('services'); // Change to specific target if needed
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Initialize script
function initializeServicesSection() {
    observeServicesSection();
    enableSmoothScrolling();
}

// Run initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializeServicesSection);






// Wait for the DOM content to load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Get the hamburger menu toggle element and the nav-right container
    const menuToggle = document.getElementById("menu-toggle");
    const navRight = document.getElementById("nav-right");

    // Add a click event listener to the hamburger menu
    menuToggle.addEventListener("click", () => {
        // Toggle the 'show' class to display or hide the navigation menu
        navRight.classList.toggle("show");
    });
});
