/*
  Property of Peliah
  GitHub: https://github.com/Peliah
  Description: Script for the Neobrutalism-style profile card.
*/

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