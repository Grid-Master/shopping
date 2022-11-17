import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

const bags = require('../../images/bags.png')

const Navbar: React.FC = () => {
    return (
        <div className='navbar-bg'>
            <div className='container'>
                <nav className='navbar'>
                    <ul className='navbar__list'>
                        <li className='navbar__list-item'>Наборы</li>
                        <li className='navbar__list-item'>Все товары</li>
                        <li className='navbar__list-item'><NavLink className={({isActive}) => (isActive? 'navbarActive' : '')} to='sewing'>Пошив</NavLink></li>
                        <li className='navbar__list-item'>Производство</li>
                        <li className='navbar__list-item'>Информация</li>
                    </ul>
                    <h2 >Шопперы со скидкой - 25%</h2>
                    <img src={bags} />
                </nav>
            </div>
        </div>
    );
};

export default Navbar;