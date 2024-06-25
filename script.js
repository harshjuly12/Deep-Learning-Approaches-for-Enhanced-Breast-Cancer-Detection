document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // List of valid email addresses
    const validEmails = ['kavita.patel8109@gmail.com', 'diptichandra900@gmail.com', 'abizer@gmail.com', 'harsh@gmail.com'];

    // Here, you would typically send a request to the server for authentication
    // and handle the response accordingly.

    // For demonstration purposes, we'll check against the list of valid email addresses.
    if (validEmails.includes(email) && password === 'password') {
        alert('Login successful! Redirecting to the home page...');
        // Redirect to the home page
        window.location.href = 'treatment option.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }


    

});