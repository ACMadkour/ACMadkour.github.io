document.addEventListener('DOMContentLoaded', function() {
// Initialize current slide index
    let currentSlide = 0;

    let slides = document.querySelectorAll('.carousel__slide');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

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

    function showPreviousSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide - 1) % slides.length;
        slides[currentSlide].style.display = 'flex'; // or 'block', based on your styling
    }

    // Set interval to auto-scroll slides (e.g., every 3 seconds)
    setInterval(showNextSlide, 10000);

    // Add event listeners to the buttons
    rightBtn.addEventListener('click', showNextSlide);
    leftBtn.addEventListener('click', showPreviousSlide);
});

document.querySelector('.navbar__menu-icon').addEventListener('click', function() {
    const navbarLinks = document.querySelector('.navbar__links');
    navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
});

// // Open mobile menu
// document.querySelector('.navbar__menu-icon').addEventListener('click', function() {
//     document.getElementById('mobile-menu').style.display = 'block';
// });
//
// // Close mobile menu
// document.querySelector('.close-menu').addEventListener('click', function() {
//     document.getElementById('mobile-menu').style.display = 'none';
//     // document.body.classList.add('reflow');
//     // document.body.offsetHeight; // Trigger a reflow
//     // document.body.classList.remove('reflow');
// });

// Select elements
const hamburgerMenu = document.querySelector('.navbar__menu-icon');
const menuOverlay = document.querySelector('.overlay-menu');
const closeOverlayBtn = document.querySelector('.close-menu'); // Assuming you have a close button
const navbarLinks = document.querySelector('.navbar__links');

// Function to show the overlay and hide the navbar links
function openMenu() {
    menuOverlay.style.display = 'block'; // Show the overlay
    navbarLinks.style.display = 'none'; // Hide the navbar links under the overlay
}

// Function to close the overlay and restore the original state
function closeMenu() {
    menuOverlay.style.display = 'none'; // Hide the overlay
    if (window.innerWidth <= 810) {
        navbarLinks.style.display = 'none'; // Ensure the links stay hidden for small screens
    } else {
        navbarLinks.style.display = 'flex'; // Ensure the links are shown for larger screens
    }
}

// Event listener to open the menu
hamburgerMenu.addEventListener('click', openMenu);

// Event listener to close the menu
closeOverlayBtn.addEventListener('click', closeMenu);

// Add an event listener for window resizing to fix any lingering issues with screen size changes
window.addEventListener('resize', function() {
    if (window.innerWidth > 810) {
        navbarLinks.style.display = 'flex'; // Show navbar links if window width is greater than 768px
    } else {
        navbarLinks.style.display = 'none'; // Hide navbar links if window width is less than 768px
    }
});




