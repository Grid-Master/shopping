import { Link } from 'react-router-dom';
import './signIn.css'

const SignIn: React.FC = () => {
    return (
        <div className='signIn'>
            <ul>
                <input type='email' placeholder='Электронная почта' />
                <input type='password' placeholder='Пароль' />
            </ul>
            <button>Войти</button>
            <Link to='register'>register</Link>
        </div>
    );
};

export default SignIn;
