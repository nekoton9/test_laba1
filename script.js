document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Очищаємо всі попередні помилки
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');
    document.getElementById('success').style.display = 'none';

    let isValid = true;

    // Перевірка імені
    let name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Перевірка email
    let email = document.getElementById('email').value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        // Додаткова перевірка структури email
        let parts = email.split('@');
        if (parts.length === 2) {
            let domain = parts[1].split('.');
            if (parts[0].length < 1 || domain.length < 2 || domain[0].length < 2 || domain[domain.length - 1].length < 2) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
        }
    }

    // Перевірка пароля
    let password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Перевірка повтору пароля
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword || confirmPassword === '') {
        document.getElementById('confirmError').style.display = 'block';
        isValid = false;
    }

    // Якщо всі перевірки пройшли
    if (isValid) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('form').reset();
    }
});