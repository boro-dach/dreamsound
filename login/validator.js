// Это клиентский код, запускайте его в браузере
export async function validate(login, password){
    // здесь валидация логина и пароля на клиенте

    if (true) {
        // Если валидация на клиенте пройдена, отправляем запрос на сервер
        const response = await fetch('http://localhost:5000/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, password })
        }).then(res=>res.json()).then(res => console.log(res)).catch(error => console.error(error));
        // const data = await response.json();
        // console.log(data.message);
        // Обработка успешного ответа сервера
        } 
        else {
        console.log('Ошибка валидации на клиенте');
        // Обработка ошибки валидации на клиенте
    }
}

// login.length > 5 && login !== '' && typeof login === "string" && login.match(/^[A-Za-z]+$/)