// Simulate loading delay
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-animation').style.display = 'none';
    }, 1000); // Adjust the delay as needed
});

// Display current UTC time
function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('current-time').textContent = utcTime;
}

// Update UTC time every second
setInterval(updateUTCTime, 1000);
updateUTCTime(); // Initial call

// Button interactivity
const profileButton = document.querySelector('.profile-button');

profileButton.addEventListener('click', () => {
    alert('Thanks for reaching out!');
});