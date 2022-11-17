import './signIn.css'

const SignIn: React.FC = () => {
    return (
        <div className='signIn'>
            <h2>Вход</h2>
            <input type='email' placeholder='Электронная почта' />
            <input type='password' placeholder='Пароль' />
            <button>Вход</button>
            <span>Регистрация</span>
        </div>
    );
};

export default SignIn;