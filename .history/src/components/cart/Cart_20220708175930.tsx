import { useState } from 'react';
import { useTypedSelector } from '../../units/hooks/useTypedSelector';
import Modal from '../../units/modal/Modal';
import CartPopup from '../cartPopup/CartPopup';
import './cart.css'

const cartIcon = require('../../images/cartIcon.png')

const Cart: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false)

    const items = useTypedSelector(state => state.cart.itemsInCart)

    return (
        <div>
            <div onClick={() => setModalActive(true)} className='cart'>
                <img src={cartIcon} alt='cartIcon' />
                <span>{items.length}</span>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <CartPopup />
            </Modal>
        </div>
    );
};

export default Cart;