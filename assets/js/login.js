document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;

        const result = loginUser(login, password);
        if (result.success) {
            window.location.href = 'profile.html';
        } else {
            message.textContent = result.message;
        }
    });
});
