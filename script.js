/*
  Property of Dushane
  GitHub: https://github.com/Dushane
  Description: Script for the Neobrutalism-style profile card.
*/

// Hamburger Menu Functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

hamburgerMenu.addEventListener('click', () => {
    const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';

    // Toggle menu visibility
    hamburgerMenu.classList.toggle('active');
    dropdownMenu.classList.toggle('show');

    // Update ARIA attributes
    hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
    dropdownMenu.setAttribute('aria-hidden', isExpanded);
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = hamburgerMenu.contains(event.target) || dropdownMenu.contains(event.target);

    if (!isClickInsideMenu && dropdownMenu.classList.contains('show')) {
        hamburgerMenu.classList.remove('active');
        dropdownMenu.classList.remove('show');
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        dropdownMenu.setAttribute('aria-hidden', 'true');
    }
});

// Close menu on Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && dropdownMenu.classList.contains('show')) {
        hamburgerMenu.classList.remove('active');
        dropdownMenu.classList.remove('show');
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        dropdownMenu.setAttribute('aria-hidden', 'true');
        hamburgerMenu.focus();
    }
});

// Simulate loading delay
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-animation').style.display = 'none';
    }, 1000); // Adjust the delay as needed
});

// Display current time in milliseconds
function updateUTCTime() {
    const now = new Date();
    const timeInMilliseconds = now.getTime();
    document.getElementById('current-time').textContent = timeInMilliseconds;
}

// Update UTC time every second
setInterval(updateUTCTime, 1000);
updateUTCTime(); // Initial call

// Toast Notification
const profileButton = document.querySelector('.profile-button');
const toast = document.getElementById('toast');
const toastClose = toast.querySelector('.toast-close');

// Show toast on button click
profileButton.addEventListener('click', () => {
    showToast();
});

// Close toast on close button click
toastClose.addEventListener('click', () => {
    hideToast();
});

// Show toast function
function showToast() {
    toast.classList.add('show');

    // Auto-hide after 3 seconds
    setTimeout(() => {
        hideToast();
    }, 3000);
}

// Hide toast function
function hideToast() {
    toast.classList.remove('show');
}