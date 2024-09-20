let slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next slide every 5 seconds (5000 milliseconds)
let autoCycle = setInterval(() => {
    nextSlide();
}, 5000); // Adjust this value to set the desired interval time

// Function for the next slide
function nextSlide() {
    showSlides(slideIndex += 1);
}

// Function for the previous slide
function prevSlide() {
    showSlides(slideIndex -= 1);
}

// Function to show the current slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");

    // Reset the index if it exceeds the number of slides
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Reset the index if it goes below 1
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Pause auto-cycling on hover
document.querySelector('.carousel-container').addEventListener('mouseover', function() {
    clearInterval(autoCycle); // Stop auto-cycling on hover
});

// Resume auto-cycling when the mouse leaves the carousel
document.querySelector('.carousel-container').addEventListener('mouseout', function() {
    autoCycle = setInterval(() => {
        nextSlide();
    }, 5000); // Resume auto-cycling after hover
});
