        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === 'admin123') {
                alert('Успешный вход!');
                // Здесь можно добавить перенаправление на другую страницу или выполнить другие действия
            } else {
                alert('Неправильное имя пользователя или пароль. Попробуйте снова.');
            }
        });

        const registerForm = document.getElementById('register-form');
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const newUsername = document.getElementById('new-username').value;
            const newPassword = document.getElementById('new-password').value;

            // Здесь можно добавить логику для регистрации нового пользователя
            alert('Регистрация успешна!');
        });
    