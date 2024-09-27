document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.carousel__slide');
    let currentSlide = 0;

    // Hide all slides initially
    slides.forEach((slide, index) => {
        if (index !== 0) slide.style.display = 'none';
    });

    // Function to show the next slide
    function showNextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'flex'; // or 'block', based on your styling
    }

    // Set interval to auto-scroll slides (e.g., every 3 seconds)
    setInterval(showNextSlide, 10000);
});
