import { useState } from 'react';
import Modal from '../../units/modal/Modal';
import CartPopup from '../cartPopup/CartPopup';
import './cart.css'

const cartIcon = require('../../images/cartIcon.png')

const Cart: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false)

    return (
        <div>
            <div className='cart'>
                <img src={cartIcon} alt='cartIcon' />
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <CartPopup />
            </Modal>
        </div>
    );
};

export default Cart;