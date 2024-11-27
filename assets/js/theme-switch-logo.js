// Get the theme switch logo and body element
const themeSwitchLogo = document.getElementById('theme-switch-logo');
const body = document.body;

// Check if there's a saved theme in localStorage and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme); // Apply the saved theme
    updateLogo(savedTheme); // Update the logo image based on the saved theme
} else {
    body.classList.add('light-theme'); // Default theme
    updateLogo('light-theme'); // Default logo for light theme
}

// Function to update the logo image based on the theme
function updateLogo(theme) {
    if (theme === 'dark-theme') {
        themeSwitchLogo.src = 'assets/img/dark-logo.png';  // Dark theme logo
    } else {
        themeSwitchLogo.src = 'assets/img/light-logo.png';  // Light theme logo
    }
}

// Add click event listener to the logo
themeSwitchLogo.addEventListener('click', () => {
    // Check if the body has the 'light-theme' class
    if (body.classList.contains('light-theme')) {
        // Switch to dark theme
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme'); // Save the theme to localStorage
        updateLogo('dark-theme'); // Update the logo image to dark logo
    } else {
        // Switch to light theme
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme'); // Save the theme to localStorage
        updateLogo('light-theme'); // Update the logo image to light logo
    }
});
