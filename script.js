document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Typed.js for text animation
    const options = {
        strings: ["Sri Varshith", "a Developer", "an AI Enthusiast", "a Problem Solver"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    };
    
    if (document.querySelector('.typing')) {
        const typed = new Typed('.typing', options);
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button click handler
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            let valid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (input.required && !input.value.trim()) {
                    valid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            
            if (valid) {
                // Success message
                const formAlert = document.createElement('div');
                formAlert.className = 'alert alert-success mt-3';
                formAlert.innerHTML = 'Message sent successfully!';
                contactForm.appendChild(formAlert);
                
                // Reset form
                contactForm.reset();
                
                // Remove alert after 3 seconds
                setTimeout(() => {
                    formAlert.remove();
                }, 3000);
            }
        });
    }
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            
            // Update icon
            const icon = this.querySelector('i');
            if (icon) {
                if (document.body.classList.contains('light-mode')) {
                    icon.className = 'fas fa-sun';
                } else {
                    icon.className = 'fas fa-moon';
                }
            }
            
            // Save preference to localStorage
            const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
        });
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
        }
    }
    
    // Project card animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Add custom cursor to body
    document.body.classList.add('custom-cursor');
    
    // Preloader
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `;
    document.body.appendChild(preloader);
    
    // Remove preloader after page load
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 500);
    });
    
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize Bootstrap popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    
    // Add random particle effect to hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        heroSection.appendChild(particlesContainer);
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random size
            const size = Math.random() * 5 + 3;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random animation duration
            particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
            
            // Random animation delay
            particle.style.animationDelay = (Math.random() * 5) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }
});

// Additional CSS for preloader and particles
const style = document.createElement('style');
style.innerHTML = `
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--dark-color);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    
    .particles-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
    }
    
    .particle {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: float linear infinite;
    }
    
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);