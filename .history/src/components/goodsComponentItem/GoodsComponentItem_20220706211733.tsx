import { useState } from 'react'
import Modal from '../../units/modal/Modal'
import { IGood } from '../goodsComponent/GoodsComponent'
import './goodsComponentItem.css'

const favoriteIcon = require('../../images/star.png')
const hoodie1 = require('../../images/hoodie1.png')
const cart = require('../../images/bracket.png')

type Props = {
    good: IGood;
}

const GoodsComponentItem: React.FC<Props> = ({ good }) => {
    const [favorite, setFavorite] = useState<boolean>(false)

    const handlerFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <div className='goodsComponentItem'>
            <div className='goodsComponentItem-top'>
                <img className='goodsComponentItem-photo' src={good.img} alt='item' />
                <img
                    onClick={handlerFavorite}
                    className={favorite ? 'goodsComponentItem-favorite goodsComponentItem-favorite-active' : 'goodsComponentItem-favorite'}
                    src={favoriteIcon}
                    alt='fav' />
            </div>
            <h4>{good.name}</h4>
            <p>{good.desc}</p>
            <ul className='goodsComponentItem-colors'>
                <li className='goodsComponentItem-color goodsComponentItem-color-1'></li>
                <li className='goodsComponentItem-color goodsComponentItem-color-2'></li>
                <li className='goodsComponentItem-color goodsComponentItem-color-3'></li>
            </ul>
            <span>From Price</span>
            <br />
            <span>${good.price}</span>
            <img className='goodsComponentItem-cart' src={cart} alt='cart' />
            <Modal active={false} setActive={() => {}} />
        </div>
    );
};

export default GoodsComponentItem;