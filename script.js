// Function to turn the screen off and on
function toggleScreen() {
    const body = document.body;
    const statusElement = document.getElementById('status');

    // Turn off the screen
    body.style.backgroundColor = 'black';
    statusElement.textContent = 'The screen is OFF.';

    // Turn on the screen after 5 seconds
    setTimeout(() => {
        body.style.backgroundColor = 'white';
        statusElement.textContent = 'The screen is ON.';
    }, 5000);
}

// Start the toggle when the page loads
window.onload = toggleScreen;
