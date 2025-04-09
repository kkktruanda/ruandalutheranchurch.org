let slideIndex = 0;
let slideshowInterval;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const playPauseButton = document.createElement('button'); // Create a button

function showSlide(n) {
    // ... (rest of your showSlides function) ...
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function startAutoplay() {
    slideshowInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    playPauseButton.textContent = 'Pause';
}

function pauseAutoplay() {
    clearInterval(slideshowInterval);
    playPauseButton.textContent = 'Play';
}

playPauseButton.addEventListener('click', () => {
    if (slideshowInterval) {
        pauseAutoplay();
    } else {
        startAutoplay();
    }
});

document.querySelector('.slideshow-container').appendChild(playPauseButton); // Add button

// Initialize
showSlide(slideIndex);
startAutoplay();
