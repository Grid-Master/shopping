import { useState } from 'react';
import './cart.css'

const cartIcon = require('../../images/cartIcon.png')

const Cart: React.FC = () => {
    const [favorite, setFavorite] = useState<boolean>(false)
    const [modalActive, setModalActive] = useState<boolean>(false)

    return (
        <div className='container'>
            <div className='cart'>
                <img src={cartIcon} alt='cartIcon' />
            </div>
        </div>
    );
};

export default Cart;