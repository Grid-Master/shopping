import { Link, Outlet } from 'react-router-dom';
import './signIn.css'

const SignIn: React.FC = () => {
    let path = useRouteMatch()

    return (
        <div className='signIn'>
            <h2>Вход</h2>
            <input type='email' placeholder='Электронная почта' />
            <input type='password' placeholder='Пароль' />
            <button>Войти</button>
            <Link to='signIn'>Регистрация</Link>
            <Outlet />
        </div>
    );
};

export default SignIn;