import { useState } from 'react';
import { useTypedSelector } from '../../units/hooks/useTypedSelector';
import Modal from '../../units/modal/Modal';
import CartPopup from '../cartPopup/CartPopup';
import PopupGood from '../popupGood/PopupGood';
import './cart.css'

const cartIcon = require('../../images/cartIcon.png')

const good = {
    id: 1,
    name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
    desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
    img: `${hoodie2}`,
    price: 76.47
}

const Cart: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false)

    const items = useTypedSelector(state => state.cart.itemsInCart)

    return (
        <div>
            <div onClick={() => setModalActive(true)} className='cart'>
                <img src={cartIcon} alt='cartIcon' />
                <span className={items.length ? 'totalItems' : 'totalItems totalItems-off'}>{items.length}</span>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                {/* <CartPopup closeCartPopup={setModalActive} /> */}
                <PopupGood closePopup={setModalActive} good='s' />
            </Modal>
        </div>
    );
};

export default Cart;