import './cartItem.css'

const hoodie = require('../../images/hoodie6.png')
const close = require('../../images/closePopup.png')

const CartItem: React.FC = () => {
    return (
        <div className='cartItem'>
            <div className='cartItem-image-container'>
                <img src={hoodie} alt='itemPhoto' className='cartItem-image' />
            </div>
            <h5 className='cartItem-name'>EL003 Elleven Checkpoint-Friendly Compu-Backpack</h5>
            <div className='cartItem__features'>
                <span className='cartItem__fetures-color-name'>Цвет</span>
                <span className='cartItem__fetures-color'></span>
                <span className='cartItem__fetures-size-name'>Размер</span>
                <span className='cartItem__fetures-size'>XS</span>
            </div>
            <div className='cartItem__amount'>
                <span className='cartItem__amount-value-name'>Кол-во</span>
                <div>
                    <button className='cartItem__amount-btn'>-</button>
                    <span className='cartItem__amount-value'>5<span className='cartItem__amount-min'>min.</span></span>
                    <button className='cartItem__amount-btn'>+</button>
                </div>
            </div>
            <span className='cartItem-total'>$76.43</span>
            <img src={close} className='cartItem-close' />
        </div>
    );
};

export default CartItem;