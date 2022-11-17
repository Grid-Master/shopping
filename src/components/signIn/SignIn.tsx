import { Link } from 'react-router-dom';
import './signIn.css'

const SignIn: React.FC = () => {
    return (
        <div className='signIn'>
            <form className='signIn-form'>
                <input type='email' placeholder='Электронная почта' />
                <input className='signIn-form-pass-input' type='password' placeholder='Пароль' />
                <div className='signIn-save'>
                    <input type='radio' /> <label htmlFor="">Запомнить меня</label>
                </div>
                <button>Войти</button>
            </form>
            <span>Забыли пароль?</span>
        </div>
    );
};

export default SignIn;
