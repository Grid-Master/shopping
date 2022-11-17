import { Link } from 'react-router-dom';
import './signIn.css'

const SignIn: React.FC = () => {
    return (
        <div className='signIn'>
            <form className='signIn-form'>
                <input type='email' placeholder='Электронная почта' />
                <input type='password' placeholder='Пароль' />

                <button>Войти</button>
            </form>
            <Link to='register'>register</Link>
        </div>
    );
};

export default SignIn;
