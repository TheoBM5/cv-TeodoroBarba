const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let slideInterval;

// Función para avanzar automáticamente al siguiente slide
function autoSlide() {
    slideInterval = setInterval(() => {
        nextSlide(); // Avanza al siguiente slide

        // Si es el último slide, regresa al primero
        if (currentIndex === slides.length - 1) {
            currentIndex = 0;
            updateCarousel();
        }
    }, 3000); // 3000 ms (3 segundos)
}

window.addEventListener('load', autoSlide);

// Detiene el carrusel automático cuando el usuario interactúa con los botones
prevBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
});

nextBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
});
// Función para avanzar al siguiente slide
function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    }
    else {
        currentIndex = 0; // Vuelve al primer slide si estás en el último
    }
    updateCarousel();
}

// Función para retroceder al slide anterior
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Vuelve al último slide si estás en el primero
    }
    updateCarousel();
}

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const translateX = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${translateX}%)`;
}

// Event listeners para los botones de navegación
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);