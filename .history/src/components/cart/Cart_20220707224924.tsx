import './cart.css'

const cartIcon = require('../../images/cartIcon.png')

const Cart: React.FC = () => {
    return (
        <div className='container'>
            <div className='cart'>
                <img src={cartIcon} alt='cartIcon' />
            </div>
        </div>
    );
};

export default Cart;