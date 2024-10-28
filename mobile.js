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


//

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

                const isIndexLink = this.classList.contains('index-link');
                const targetHref = this.getAttribute('href');
                const targetId = targetHref.split('#')[1];
                const isOnIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

                if (isIndexLink) {
                    // If the link should scroll to a section in index.html
                    if (isOnIndex) {
                        // If we're already on index.html, scroll to the section
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            console.error('Target element not found:', targetId);
                        }
                        closeMenu();
                    } else {
                        // Navigate to index.html with the fragment identifier
                        sessionStorage.setItem('closeMenuAfterNavigate', 'true');
                        window.location.href = `index.html#${targetId}`;
                    }
                } else {
                    // If the link should navigate to a different page
                    window.location.href = targetHref;
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
