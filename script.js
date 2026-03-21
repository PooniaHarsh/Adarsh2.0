// Header Scroll Effect
const header = document.getElementById('header');

function headerScroll() {
    if (window.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', headerScroll);

// Mobile Menu Toggle
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

function scrollReveal() {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Initial check on load
scrollReveal();

// Check on scroll
window.addEventListener('scroll', scrollReveal);

// Active Link Highlighting
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100; // offset for fixed header
        const sectionId = current.getAttribute('id');
        
        const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if(link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);
