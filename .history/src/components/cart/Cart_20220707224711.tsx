import './cart.css'

const cartIcon = require('../../images/cartIcon.png')

const Cart: React.FC = () => {
    return (
        <div className='cart'>
            <img src={cartIcon} alt='cartIcon'/>
        </div>
    );
};

export default Cart;