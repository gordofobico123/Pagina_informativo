// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 100,
});

// Mobile Navigation
// Funciones para el menú móvil
function showMenu() {
    document.getElementById('navLinks').classList.add('active');
}

function hideMenu() {
    document.getElementById('navLinks').classList.remove('active');
}

// Inicialización de AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (document.getElementById('navLinks').classList.contains('active')) {
                hideMenu();
            }
        }
    });
});

// Testimonial Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');
let currentSlide = 0;

// Initialize testimonial slider
function showSlide(index) {
    // Hide all slides
    testimonialSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show the current slide and activate corresponding dot
    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Next slide
function nextSlide() {
    currentSlide++;
    if (currentSlide >= testimonialSlides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Previous slide
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = testimonialSlides.length - 1;
    }
    showSlide(currentSlide);
}

// Event listeners for testimonial controls
if (prevBtn && nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Floating animation for hero elements
const floatElements = document.querySelectorAll('.float-element');
floatElements.forEach(element => {
    // Random initial position
    const randomX = Math.random() * 20 - 10;
    const randomY = Math.random() * 20 - 10;
    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Play button functionality for demo video
const playButton = document.querySelector('.play-button');
if (playButton) {
    playButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Here you would typically open a modal with the video
        // For this example, we'll just show an alert
        alert('Video demo would play here!');
    });
}

// Sticky navigation on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Add sticky nav styles to CSS dynamically
const style = document.createElement('style');
style.innerHTML = `
    nav.sticky {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: white;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        padding: 1rem 7%;
        z-index: 1000;
        animation: slideDown 0.5s ease forwards;
    }
    
    @keyframes slideDown {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Form submission
const newsletterForm = document.querySelector('.footer-newsletter form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput.value) {
            // Here you would typically send the email to your server
            alert('¡Gracias por suscribirte! Te mantendremos informado sobre Quick POS.');
            emailInput.value = '';
        }
    });
}

// Add animation to CTA button
const ctaButton = document.querySelector('.cta .btn-primary');
if (ctaButton) {
    ctaButton.addEventListener('mouseover', function() {
        this.classList.add('animated');
    });
    
    ctaButton.addEventListener('mouseout', function() {
        this.classList.remove('animated');
    });
    
    // Add animated button styles
    const ctaStyle = document.createElement('style');
    ctaStyle.innerHTML = `
        .btn-primary.animated {
            animation: pulse 1s infinite;
        }
    `;
    document.head.appendChild(ctaStyle);
}

// Intersection Observer for counting animation
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
    const options = {
        threshold: 0.7
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const updateCounter = () => {
                    const increment = target / 100;
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCounter, 10);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, options);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Create folder structure for images
console.log('Don\'t forget to create an "images" folder with the following files:');
console.log('- logo.png (Infinity Computer Solución logo)');
console.log('- pos-device.png (Quick POS device image)');
console.log('- pos-screen.png (Quick POS interface screenshot)');
console.log('- client1.jpg, client2.jpg, client3.jpg (Client testimonial photos)');

// Add this code to your existing script.js file

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to your server
        // For this example, we'll just show an alert
        alert(`¡Gracias ${name} por contactarnos! Te responderemos a la brevedad.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Form input animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
});