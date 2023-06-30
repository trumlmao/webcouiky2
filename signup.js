// validation form register and register user local storage


// validation form register and register user local storage


document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const submitBtn = document.querySelector('.signup_btn');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const user = {
        username: username,
        password: password
      };

      const json = JSON.stringify(user);
      localStorage.setItem(username, json);

      alert('Registration successful.');
      window.location.href = 'login.html';
    }
  });
  

  function validateForm() {
    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill in all fields.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!password.match(passwordRegex)) {
      alert('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.');
      return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Additional validation rules can be added here

    return true;
  }
});