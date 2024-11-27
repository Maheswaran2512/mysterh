// JavaScript for dynamic background color and loader visibility

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update background color dynamically while loading
function updateBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Show loader and change background color every second while loading
let loader = document.getElementById('loader');
let content = document.getElementById('content');

// Change the background color every second while the loader is visible
let backgroundInterval = setInterval(updateBackgroundColor, 1000);

// Once the window is fully loaded, stop the background color changes and hide the loader
window.addEventListener('load', function() {
    clearInterval(backgroundInterval); // Stop changing background color

    // Hide the loader and show the content
    loader.classList.add('hidden'); // Add the 'hidden' class to fade out the loader
    content.style.display = 'block'; // Show the content
});
