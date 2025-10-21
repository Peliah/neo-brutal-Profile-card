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

// Contact Form Validation (if contact form exists)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form elements
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const subjectInput = document.getElementById('contact-subject');
        const messageInput = document.getElementById('contact-message');
        const submitStatus = document.getElementById('contact-submit-status');

        // Clear previous errors
        clearFormErrors();

        let isValid = true;

        // Validate name (Full name required)
        if (!nameInput.value.trim()) {
            showFieldError('contact-name', 'Full name is required');
            isValid = false;
        }

        // Validate email (must be valid format: name@example.com)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            showFieldError('contact-email', 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            showFieldError('contact-email', 'Please enter a valid email address (name@example.com)');
            isValid = false;
        }

        // Validate subject (required)
        if (!subjectInput.value.trim()) {
            showFieldError('contact-subject', 'Subject is required');
            isValid = false;
        }

        // Validate message (required and at least 10 characters)
        if (!messageInput.value.trim()) {
            showFieldError('contact-message', 'Message is required');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showFieldError('contact-message', 'Message must be at least 10 characters long');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            submitStatus.textContent = 'Sending message...';
            submitStatus.style.color = '#2c3e50';

            setTimeout(() => {
                submitStatus.textContent = 'Message sent successfully!';
                submitStatus.style.color = '#27ae60';
                contactForm.reset();

                // Show toast notification
                if (toast) {
                    toast.querySelector('.toast-message').textContent = 'Message sent successfully!';
                    showToast();
                }
            }, 1500);
        } else {
            submitStatus.textContent = 'Please fix the errors above';
            submitStatus.style.color = '#e74c3c';
        }
    });
}

function showFieldError(fieldId, message) {
    const errorElement = document.getElementById(fieldId.replace('contact-', 'contact-error-'));
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearFormErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}