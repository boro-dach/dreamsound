import { useLocation, useNavigate, Link } from "react-router-dom";

// Это клиентский код, запускайте его в браузере
async function validate(login, password){
    // здесь валидация логина и пароля на клиенте

    if (true) {
        // Если валидация на клиенте пройдена, отправляем запрос на сервер
        try {
            const response = await fetch('/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login, password })
            });
            const data = await response.json();
            console.log(data.message);
            // Обработка успешного ответа сервера
        } catch (err) {
            console.error('Ошибка при отправке запроса', err);
            // Обработка ошибки отправки запроса
        }
    } else {
        console.log('Ошибка валидации на клиенте');
        // Обработка ошибки валидации на клиенте
    }
}

// login.length > 5 && login !== '' && typeof login === "string" && login.match(/^[A-Za-z]+$/)

function Login(){

    function getLoginData(){
        const login = document.querySelector('.login').value
        const password = document.querySelector('.password').value

        validate(login, password)
    }

    return (
        <div className="login_page">
            <h1>Войдите в аккаунт:</h1>
            <input maxLength={"16"} className="login" type="login" placeholder="логин" />
            <input className="password" type="password" placeholder="пароль" />
            <button onClick={getLoginData} >Войти</button>
            <Link to={'/register'}>Зарегистрироваться</Link>
            <p className="error_message">Упс, ваши данные не верны(</p>
        </div>
    )
}

export {Login}