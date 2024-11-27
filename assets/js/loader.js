// Wait for the page to fully load
window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
    setTimeout(() => loader.style.display = 'none', 500); // Matches transition duration
  });