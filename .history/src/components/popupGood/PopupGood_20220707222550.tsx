import React from 'react'
import { useDispatch } from 'react-redux'
import { setItemInCart } from '../../store/cart/reducer'
import { IGood } from '../goodsComponent/GoodsComponent'
import './popupGood.css'

const boy1 = require('../../images/boy1.png')
const boy2 = require('../../images/boy2.png')
const boy3 = require('../../images/boy3.png')
const boy4 = require('../../images/boy4.png')
const sizeTable = require('../../images/sizeTable.png')
const ruller = require('../../images/ruller.png')
const close = require('../../images/closePopup.png')

type Props = {
    closePopup: React.Dispatch<React.SetStateAction<boolean>>;
    good: IGood;
}

const PopupGood: React.FC<Props> = ({ closePopup, good }) => {
    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation();
        dispatch(setItemInCart(good))
    }

    return (
        <div className='popupGood'>
            <div className='popupGood__photos'>
                <div className='popupGood__photos-main-container'>
                    <img src={boy1} className='popupGood__photos-main' alt='photo' />
                </div>
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
                <h4 className='popupGood-price'>From Price ${good.price}</h4>
                <p className='popupGood__desc'>
                    This exclusive design has a designated laptop-only section that unfolds to lay flat on the X-ray belt to increase your speed,
                    convenience and security.
                    (Pens, Laptop and other devices shown are not included)
                </p>
                <div className='popupGood__order'>
                    <form className='popupGood__order-form'>
                        <h4 className='popupGood__order-form-title'>????????????</h4>
                        <ul className='popupGood__order-form-sizes'>
                            <li className='popupGood__order-form-size'>XS</li>
                            <li className='popupGood__order-form-size'>S</li>
                            <li className='popupGood__order-form-size'>M</li>
                            <li className='popupGood__order-form-size'>L</li>
                            <li className='popupGood__order-form-size'>XXL</li>
                        </ul>
                        <span>?????????????????? ????????????<img src={ruller} alt='ruler' /></span>
                        <button
                            onClick={handleClick}
                        >????????????????</button>
                    </form>
                    <div className='popupGood__order-features'>
                        <h4 className='popupGood__order-features-title'>????????????????????????????</h4>
                        <ul className='popupGood__order-features-list'>
                            <li className='popupGood__order-features-list-item'>
                                <span className='popupGood__order-features-list-item-name'>????????????????</span>
                                <span className='popupGood__order-features-list-item-info'>100% ????????????</span>
                            </li>
                            <li className='popupGood__order-features-list-item'>
                                <span className='popupGood__order-features-list-item-name'>??????????????????</span>
                                <span className='popupGood__order-features-list-item-info'>??????????????, ??????????????????????</span>
                            </li>
                            <li className='popupGood__order-features-list-item'>
                                <span className='popupGood__order-features-list-item-name'>???????????????? ??????????</span>
                                <span className='popupGood__order-features-list-item-info'>100% ????????????</span>
                            </li>
                            <li className='popupGood__order-features-list-item'>
                                <span className='popupGood__order-features-list-item-name'>??????????????????, ??/??</span>
                                <span className='popupGood__order-features-list-item-info'>150</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src={sizeTable} alt='table' />
                <img
                    onClick={() => closePopup(false)}
                    className='closePopupButton'
                    src={close} alt='close'
                />
            </div>
        </div>
    );
};

export default PopupGood;