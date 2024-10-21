document.addEventListener('DOMContentLoaded', function() {

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
    window.addEventListener('resize', function () {
        if (window.innerWidth > 810) {
            navbarLinks.style.display = 'flex'; // Show navbar links if window width is greater than innerwidth
        } else {
            navbarLinks.style.display = 'none'; // Hide navbar links if window width is less than innerwidth
        }
    });
});