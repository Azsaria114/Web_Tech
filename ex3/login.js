document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your validation logic here
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email && password) {
            alert('Login successful!');
        } else {
            alert('Please enter valid email and password.');
        }
    });
});
(document).ready(function() {
    // Make an AJAX request to fetch the user's profile information
    $.ajax({
        url: "/api/getUserProfile", // Replace with your API endpoint
        type: "GET",
        success: function(data) {
            // Update the user's nickname in the header
            $("#user-nickname").text("Welcome, " + data.nickname);
        },
        error: function() {
            // Handle errors if profile retrieval fails
        }
    });
});