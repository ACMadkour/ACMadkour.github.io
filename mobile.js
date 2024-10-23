// Function to open the menu overlay
function openMenu() {
    // console.log("Open Menu");
    const menuOverlay = document.getElementById('menuOverlay');
    attachMenuListeners();
    menuOverlay.classList.add('open');
}


// Function to close the menu overlay
function closeMenu() {
    // console.log('Closing the menu...'); // Debugging
    const menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.remove('open');
}

// function attachMenuListeners() {
//     console.log('DOM fully loaded and parsed'); // Check if DOMContentLoaded is firing
//     // Use a more specific selector to target the links inside .overlay-content
//     const links = document.querySelectorAll('#menuOverlay .overlay-content a');
//     console.log('Links found:', links); // Debugging: Check if links are selected
//
//     links.forEach(link => {
//         console.log('Attaching event listener to:', link);
//         link.addEventListener('click', function (event) {
//             event.preventDefault(); // Prevent default link behavior
//
//             const targetId = this.getAttribute('href').split('#')[1];
//             // const targetElement = document.querySelector(`#${targetId}`);
//             window.location.href = `index.html#${targetId}`;
//
//             // if (targetElement) {
//             //     targetElement.scrollIntoView({behavior: 'smooth'});
//             //     closeMenu();
//             // } else {
//             //     console.error('Target element not found:', targetId);
//             // }
//         });
//     });
// }

function attachMenuListeners() {
    const hamburgerMenu = document.getElementById('hamburger');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function () {
            openMenu();
        });

        const closeMenuButton = document.querySelector('.close-menu');
        if (closeMenuButton) {
            closeMenuButton.addEventListener('click', function () {
                closeMenu();
            });
        }

        const links = document.querySelectorAll('#menuOverlay .overlay-content a');
        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default link behavior

                // Extract the fragment identifier (e.g., #how-it-works)
                const targetId = this.getAttribute('href').split('#')[1];
                const targetElement = document.getElementById(targetId);

                // Check if we are already on index.html or just '/'
                const isOnIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

                if (isOnIndex) {
                    // If we are already on index.html, scroll to the section
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        console.error('Target element not found:', targetId);
                    }
                    // Close the menu overlay
                    closeMenu();
                } else {
                    // If not on index.html, navigate to index.html with the appropriate fragment
                    window.location.href = `index.html#${targetId}`;
                }
            });
        });
    } else {
        console.error('hamburgerMenu is null');
    }
}


// document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.navbar__menu-icon');
// const menuOverlay = document.querySelector('.overlay-menu');
    const closeOverlayBtn = document.querySelector('.close-menu'); // Assuming you have a close button
    const navbarLinks = document.querySelector('.navbar__links');
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
