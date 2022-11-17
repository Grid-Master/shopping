import { useState } from 'react';
import Modal from '../../units/modal/Modal';
import './cart.css'

const cartIcon = require('../../images/cartIcon.png')

const Cart: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false)

    return (
        <div className='container'>
            <div className='cart'>
                <img src={cartIcon} alt='cartIcon' />
            </div>
            <Modal active={modalActive}>
                <CartPopup />
            </Modal>
        </div>
    );
};

export default Cart;