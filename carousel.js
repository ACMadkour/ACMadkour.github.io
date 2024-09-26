let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to the first slide

    slides[slideIndex - 1].style.display = "block"; // Show the active slide

    setTimeout(showSlides, 7000); // Change slide every 5 seconds
}


// Function to move to the next slide every 5 seconds (5000 milliseconds)
let autoCycle = setInterval(() => {
    nextSlide();
}, 7000); // Adjust this value to set the desired interval time

// Function for the next slide
function nextSlide() {
    showSlides(slideIndex += 1);
}

// Function for the previous slide
function prevSlide() {
    showSlides(slideIndex -= 1);
}

// Pause auto-cycling on hover
document.querySelector('.carousel-container').addEventListener('mouseover', function() {
    clearInterval(autoCycle); // Stop auto-cycling on hover
});

// Resume auto-cycling when the mouse leaves the carousel
document.querySelector('.carousel-container').addEventListener('mouseout', function() {
    autoCycle = setInterval(() => {
        nextSlide();
    }, 7000); // Resume auto-cycling after hover
});
