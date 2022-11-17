import './signIn.css'

const SignIn: React.FC = () => {
    return (
        <div className='signIn'>
            <h2></h2>
            <input type='email' placeholder='Электронная почта' />
            <input type='password' placeholder='Пароль' />
        </div>
    );
};

export default SignIn;