import './cartItem.css'

const hoodie = require('../../images/hoodi1.png')
const close = require('../../images/closePopup.png')

const CartItem: React.FC = () => {
    return (
        <div className='cartItem'>
            <img src={hoodie} alt='itemPhoto' className='cartItem-image' />
            <h5 className='cartItem-name'>EL003 Elleven Checkpoint-Friendly Compu-Backpack</h5>
            <div className='cartItem__features'>
                <span className='cartItem__fetures-color'>Цвет</span>
                <span className='cartItem__fetures-size-name'>Размер</span>
                <span className='cartItem__fetures-size'>XS</span>
            </div>
            <div className='cartItem__amount'>
                <button className='cartItem__amount-btn'>+</button>
                <span className='cartItem__amount-value'>5</span>
                <button className='cartItem__amount-btn'>-</button>
            </div>
            <span className='cartItem-total'>$76.43</span>
            <img src={close} className='cartItem-close' />
        </div>
    );
};

export default CartItem;