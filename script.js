
// Carousel functionality with fade for background and slide for text
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const contents = document.querySelectorAll('.carousel-content');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    contents.forEach((content, i) => {
        if (i === index) {
            content.classList.remove('slide-left', 'slide-right');
        } else if (i < index) {
            content.classList.add('slide-left');
        } else {
            content.classList.add('slide-right');
        }
    });
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
    });
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto slide every 6 seconds
setInterval(nextSlide, 6000);

// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// ScrollReveal initialization
ScrollReveal().reveal('.reveal', {
    distance: '30px',
    duration: 600,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false
});