import { Store } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../../units/hooks/useTypedSelector';
import CartItem from '../cartItem/CartItem';
import { IGood } from '../goodsComponent/GoodsComponent';
import './cartPopup.css'



const CartPopup: React.FC = () => {
    const items = useTypedSelector(state => state.cart.itemsInCart)
    const totalPrice: number = items.reduce((acc, item) => acc += item.price, 0)

    console.log(items)

    return (
        <div className='cartPopup'>
            <form className='cartPopup__form'>
                <h3 className='cartPopup__form-title'>Оформить заказ</h3>
                <p className='cartPopup__form-desc-1'>Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа</p>
                <input className='cartPopup__form-input' placeholder='Ваше Имя' />
                <input className='cartPopup__form-input' placeholder='Ваша електронная почта' />
                <input className='cartPopup__form-input cartPopup__form-input-number' placeholder='Ваш номер телефона' />
                <button className='cartPopup__form-submit'>Заказать</button>
                <p className='cartPopup__form-desc-2'>Натискаючи "Підтвердити замовлення", Ви даєте згоду на обробку Ваших персональних даних</p>
            </form>
            <div className='cartPopup__items'>
                <h3 className='cartPopup__items-title'>Корзина</h3>
                <ul className='cartPopup__items-list'>
                    <CartItem item={items[0]} />
                </ul>
                <div className='cartPopup__items-footer'>
                    <span className='cartPopup__items-order'>Заказ № 110293</span>
                    <span className='cartPopup__items-totalprice'>Всего: $ {totalPrice}</span>
                </div>
            </div>

        </div>
    );
};

export default CartPopup;