// Проверяем, залогинен ли пользователь
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('chessflux_user'));
    return user || null;
}

// Регистрация
function registerUser(login, password) {
    const users = JSON.parse(localStorage.getItem('chessflux_users')) || [];
    
    // Проверка на существование логина
    const exists = users.find(u => u.login === login);
    if (exists) {
        return { success: false, message: 'Пользователь с таким логином уже существует' };
    }

    users.push({ login, password });
    localStorage.setItem('chessflux_users', JSON.stringify(users));
    
    // Сразу авторизуем после регистрации
    localStorage.setItem('chessflux_user', JSON.stringify({ login }));
    return { success: true, message: 'Регистрация успешна' };
}

// Вход
function loginUser(login, password) {
    const users = JSON.parse(localStorage.getItem('chessflux_users')) || [];
    const user = users.find(u => u.login === login && u.password === password);

    if (user) {
        localStorage.setItem('chessflux_user', JSON.stringify(user));
        return { success: true };
    }
    return { success: false, message: 'Неверный логин или пароль' };
}

// Выход
function logout() {
    localStorage.removeItem('chessflux_user');
}
