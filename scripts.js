function nextStep(step) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(function(stepElement) {
        stepElement.classList.remove('active');
    });

    // Show the selected step
    document.getElementById('step-' + step).classList.add('active');
}

// Handle button group toggle
document.querySelectorAll('.button-group .btn').forEach(function(button) {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.button-group .btn').forEach(function(btn) {
            btn.classList.remove('active');
        });

        // Add active class to clicked button
        this.classList.add('active');
    });
});
