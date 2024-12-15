
    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.getElementById('loginForm');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            let isValid = true;

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            // Password validation
            if (passwordInput.value.length < 8) {
                passwordError.style.display = 'block';
                isValid = false;
            } else {
                passwordError.style.display = 'none';
            }

            if (isValid) {
                document.body.innerHTML = '<div class="success-message-container"><div class="success-message">Welcome! Login successful.</div></div>';
            }
        });
    });

