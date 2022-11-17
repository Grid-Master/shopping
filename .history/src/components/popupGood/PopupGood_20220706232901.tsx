import './popupGood.css'

const boy1 = require('../../images/boy1.png')
const boy2 = require('../../images/boy2.png')
const boy3 = require('../../images/boy3.png')
const boy4 = require('../../images/boy4.png')
const sizeTable = require('../../images/sizeTable.png')
const ruller = require('../../images/ruller.png')

const PopupGood: React.FC = () => {
    return (
        <div className='popupGood'>
            <div className='popupGood__photos'>
                <img src={boy1} className='popupGood__photos-main' alt='photo' />
                <div className='popupGood__photos-list'>
                    <img src={boy2} className='popupGood__photos-photo' alt='photo' />
                    <img src={boy3} className='popupGood__photos-photo' alt='photo' />
                    <img src={boy4} className='popupGood__photos-photo' alt='photo' />
                </div>
            </div>
            <div>
                <h3 className='popupGood-title'>EL003 Elleven Checkpoint-Friendly Compu-Backpack</h3>
                <ul className='popupGood-colors'>
                    <li className='goodsComponentItem-color goodsComponentItem-color-1'></li>
                    <li className='goodsComponentItem-color goodsComponentItem-color-2'></li>
                    <li className='goodsComponentItem-color goodsComponentItem-color-3'></li>
                </ul>
                <h4 className='popupGood-price'>From Price $76.43</h4>
                <p className='popupGood__desc'>
                    This exclusive design has a designated laptop-only section that unfolds to lay flat on the X-ray belt to increase your speed,
                    convenience and security.
                    (Pens, Laptop and other devices shown are not included)
                </p>
                <div className='popupGood__order'>
                    <form className='popupGood__order-form'>
                        <h4 className='popupGood__order-form-title'>Размер</h4>
                        <ul className='popupGood__order-form-sizes'>
                            <li className='popupGood__order-form-size'>XS</li>
                            <li className='popupGood__order-form-size'>S</li>
                            <li className='popupGood__order-form-size'>M</li>
                            <li className='popupGood__order-form-size'>L</li>
                            <li className='popupGood__order-form-size'>XXL</li>
                        </ul>
                        <span>Подобрать размер<img src={ruller} alt='ruler'/></span>
                        <button>Заказать</button>
                    </form>
                    <div className='popupGood__order-features'>
                        <h4>Характеристики</h4>
                        <ul className='popupGood__order-features-list'>
                            <li className='popupGood__order-features-list-item'>
                                <span>Материал</span>
                                <span>100% хлопок</span>
                            </li>
                            <li className='popupGood__order-features-list-item'>
                                <span>Нанесение</span>
                                <span>вышивка, термопечать</span>
                            </li>
                            <li className='popupGood__order-features-list-item'>
                                <span>Торговая марка</span>
                                <span>100% хлопок</span>
                            </li>
                            <li className='popupGood__order-features-list-item'>
                                <span>Плотность, г/м</span>
                                <span>150</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src={sizeTable} alt='table' />
            </div>
        </div>
    );
};

export default PopupGood;