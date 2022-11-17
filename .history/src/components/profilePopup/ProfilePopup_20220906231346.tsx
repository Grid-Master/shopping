import React from 'react';
import { Link, Outlet, } from 'react-router-dom';
import Register from '../register/Register';
import SignIn from '../signIn/SignIn';
import './profilePopup.css'

const logo = require('../../images/logo2.png')

const ProfilePopup: React.FC = () => {


    return (
        <div className='profilePopup'>
            <img src={logo} alt='logo' />
            <div className='profilePopup-links'>
                <Link to='/signIn'>Вход</Link>
                <Link to='/signIn'>Регистрация</Link>
            </div>

            {/* <Outlet /> */}
            <SignIn /> 
            {/* <Register /> */}
        </div>
    );
};

export default ProfilePopup;