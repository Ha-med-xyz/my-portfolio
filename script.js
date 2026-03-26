// Wait for load before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    // Select every element with the toggle-button class
    const buttons = document.querySelectorAll('.toggle-button');

    // Iterate over each button
    buttons.forEach(button => {
        // Add click event listener to buttons
        button.addEventListener('click', () => {
            // Get the parent element project-card
            const projectCard = button.closest('.project-card');

            // Find project-details element in the project card
            const details = projectCard.querySelector('.project-details');

            // Toggle the active class on project-details element
            details.classList.toggle('active');

            // Change the button text if the active class is present
            if (details.classList.contains('active')) {
                button.textContent = 'Less...';
            } else {
                button.textContent = 'More...';
            }
        });
    });
});

// Validation for contact form
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('message');
const successMsg = document.getElementById('success-msg');


// Show error and mark field invalid
function displayError(input, errorId, message) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    document.getElementById(errorId).textContent = message;
}

// Clear any error and mark field valid
function clearError(input, errorId) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    document.getElementById(errorId).textContent = '';
}

// Validate name field (non-empty)
function validateName() {
    const value = nameInput.value.trim();
    if (value === '') {
        displayError(nameInput, 'name-error', 'Name cannot be empty.');
        return false;
    }
    clearError(nameInput, 'name-error');
    return true;
}


function validateEmail() {
    const value = emailInput.value.trim();
    // Basic email pattern: something@something.something
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '') {
        displayError(emailInput, 'email-error', 'Email cannot be empty.');
        return false;
    }
    if (!emailPattern.test(value)) {
        displayError(emailInput, 'email-error', 'Please enter a valid email address.');
        return false;
    }
    clearError(emailInput, 'email-error');
    return true;
}

function validateMessage() {
    const value = msgInput.value.trim();
    if (value === '') {
        displayError(msgInput, 'message-error', 'Message cannot be empty.');
        return false;
    }
    clearError(msgInput, 'message-error');
    return true;
}

// Validate form submission
form.addEventListener('submit', (event) => {
// Prevent reload
event.preventDefault;

// Validate all
const nameValid = validateName();
const emailValid = validateEmail();
const messageValid = validateMessage();

// Continue if all fields are valid
if (nameValid && emailValid && messageValid) {
    successMsg.textContent = 'Message sent successfully.'

    //Clear form 
    form.reset();

    // Clear styling from clearError
    [nameInput, emailInput, msgInput].forEach(input => {
            input.classList.remove('valid');
        });
    } else {
        successMsg.textContent = '';
    }
});