import React from 'react';

const CartPopup: React.FC = () => {
    return (
        <div className='cartPopup'>
            <form>
                <h3>Оформить заказ</h3>
                <p>Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа</p>
                <input placeholder='Ваше Имя'/>
                <input placeholder='Ваша електронная почта'/>
                <input  placeholder='Ваш номер телефона'/>
                <button>Заказать</button>
                <p>Натискаючи "Підтвердити замовлення", Ви даєте згоду на обробку Ваших персональних даних</p>
            </form>
            <div>
                <h3>Корзина</h3>
                {/* <CartItem /> */}
                <div>
                    <span>Заказ № 110293</span>
                    <span>Всего: $ 235.80</span>
                </div>
            </div>

        </div>
    );
};

export default CartPopup;