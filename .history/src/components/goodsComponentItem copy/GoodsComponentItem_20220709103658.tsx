import { useState } from 'react'
import { IGood } from '../../units/interface'
import Modal from '../../units/modal/Modal'
import PopupGood from '../popupGood/PopupGood'
// import './goodsComponentItemCopy.css'

const favoriteIcon = require('../../images/star.png')
const cart = require('../../images/bracket.png')

type Props = {
    good: IGood;
}

const GoodsComponentItemCopy: React.FC<Props> = ({ good }) => {
    const [favorite, setFavorite] = useState<boolean>(false)
    const [modalActive, setModalActive] = useState<boolean>(false)

    const handlerFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <div className='goodsComponentItem'>
           <Modal active={modalActive} setActive={setModalActive}>
           <PopupGood closePopup={setModalActive} good={good} />
           </Modal>
        </div>
    );
};

export default GoodsComponentItemCopy;