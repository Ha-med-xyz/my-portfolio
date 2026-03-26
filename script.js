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