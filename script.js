

// Automatically update the footer year
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Bonus: Add a simple console message for your client
    console.log('✅ Portfolio loaded successfully!');
});