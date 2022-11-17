import { IGood } from '../goodsComponent/GoodsComponent'
import './goodsComponentItem.css'

const favorite = require('../../images/star.png')
const hoodie1 = require('../../images/hoodie1.png')
const bracket = require('../../images/bracket.png')

type Props = {
    good: IGood;
}

const GoodsComponentItem: React.FC<Props> = ({ good }) => {
    return (
        <div className='goodsComponentItem'>
            <div className='goodsComponentItem-top'>
                <img className='goodsComponentItem-photo' src={hoodie1} alt='item' />
                <img className='goodsComponentItem-favorite' src={favorite} alt='fav' />
            </div>
            <h4>EL003 Elleven Checkpoint-Friendly Compu-Backpack</h4>
            <p>EL003 Elleven Checkpoint-Friendly Compu-Backpack</p>
            <ul className='goodsComponentItem-colors'>
                <li className='goodsComponentItem-color goodsComponentItem-color-1'></li>
                <li className='goodsComponentItem-color goodsComponentItem-color-2'></li>
                <li className='goodsComponentItem-color goodsComponentItem-color-3'></li>
            </ul>
            <span>From Price</span>
            <br />
            <span>$76.43</span>
            <img className='goodsComponentItem-bracket' src={bracket} alt='bracket' />
        </div>
    );
};

export default GoodsComponentItem;