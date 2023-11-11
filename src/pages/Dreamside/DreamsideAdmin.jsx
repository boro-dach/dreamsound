import '../../styles/css/admin.css'

const pass = 123123
function DreamsideAdmin(){
    return(
        <div className="login">
            <input type="password" placeholder="Введите пароль:" />
            <button>Войти</button>
        </div>
    )
}

export default DreamsideAdmin