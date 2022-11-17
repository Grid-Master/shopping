import './footer.css'
import {BsFillArrowRightCircleFill} from "react-icons/bs"

const logoFooter = require('../../images/logoFooter.png')
const instagram = require('../../images/Instagram.png')
const facebook = require('../../images/Facebook.png')
const linkedIn = require('../../images/LinkedIn.png')

const MyFooter: React.FC = () => {
    return (
        <footer className='footer-bg'>
            <div className='container'>
                <div className='footer'>
                    <div className='footer-socials'>
                        <img src={logoFooter} alt='logo' />
                        <p>Свежее дыхание в корпоративной жизни и жизни корпоративной дыхание свежее </p>
                        <span className='footer-socails-number'>+380 630 130 103</span>
                        <span className='footer-socails-email'>example@gmail.com</span>
                        <ul className='footer-socails-list'>
                            <li><img src={facebook} /></li>
                            <li><img src={instagram} /></li>
                            <li><img src={linkedIn} /></li>
                        </ul>
                    </div>
                    <ul className='footer-categories'>
                        <h4>Категории</h4>
                        <li>Пошив</li>
                        <li>Все товары</li>
                        <li>Наборы</li>
                        <li>Производство</li>
                    </ul>
                    <ul className='footer-information'>
                        <h4>Информация</h4>
                        <li>О нас</li>
                        <li>ЧаВо</li>
                        <li>Контакты</li>
                    </ul>
                    <div className='footer-questions'>
                        <span>Связаться с менеджером</span>
                        <p>Есть вопрос на который не нашли ответ? Оставьте контакт и наш менеджер свяжеться с вами</p>
                        <form className='footer-questions-form'>
                            <input placeholder='Номер телефона' />
                            <button><BsFillArrowRightCircleFill className='footer-questions-arrow' /></button>
                        </form>
                    </div>
                </div>
                <p className='f2022'>© 2022 . All rights reserved. <span className='politic'>Политика конфиденциальности</span></p>
            </div>
        </footer>
    );
};

export default MyFooter; 