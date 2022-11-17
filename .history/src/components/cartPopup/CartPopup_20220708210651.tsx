import { useTypedSelector } from '../../units/hooks/useTypedSelector';
import CartItem from '../cartItem/CartItem';
import './cartPopup.css'

const close = require('../../images/closePopup.png')

type Props = {
    closeCartPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const CartPopup: React.FC<Props> = ({closeCartPopup}) => {
    const items = useTypedSelector(state => state.cart.itemsInCart)
    const totalPrice: number = items.reduce((acc, item) => acc += item.price, 0)

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
                    {items.length ? items.map((item) => <CartItem item={item} key={item.id} />) : <span>Корзина пуста</span>}
                </ul>
                <div className='cartPopup__items-footer'>
                    <span className='cartPopup__items-order'>Заказ № 110293</span>
                    <span className='cartPopup__items-totalprice'>Всего: $ {totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <img
                className='closeCartPopup'
                src={close}
                alt='closepopup'
            />
        </div>
    );
};

export default CartPopup;