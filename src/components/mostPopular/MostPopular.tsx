import './mostPopular.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const card1 = require('../../images/card1.png')
const card2 = require('../../images/card2.png')
const card3 = require('../../images/card3.png')
const card4 = require('../../images/card4.png')
const star = require('../../images/star.png')

const MostPopular: React.FC = () => {
    return (
        <div className='mp-background'>
            <div className='container'>
                <div className='mp-desc'>
                    <div className='mp-desc-left'>
                        <h2 className='mp-desc-title'>Самое популярное <img src={star} /></h2>
                        <span>Товары, которые наиболее часто заказывают наши клиенты</span>
                    </div>
                    <span className='toAll'><NavLink to='/goods'>Все товары <FaLongArrowAltRight className='arrow' /></NavLink></span>
                </div>
                <div className='mp-cards'>
                    <div className='shoppers'>
                        <img src={card1} />
                        <span>Шопперы</span>
                    </div>
                    <div className='mp-cards-r'>
                        <img src={card2} />
                        <div className='mp-cards-b'>
                            <img src={card3} />
                            <img src={card4} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostPopular;