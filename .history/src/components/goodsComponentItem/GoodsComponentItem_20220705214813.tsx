import './goodsComponentItem.css'

const favorite = require('../../images/star.png')
const hoodie1 = require('../../images/hoodie1.png')

const GoodsComponentItem: React.FC = () => {
    return (
        <div className='goodsComponentItem'>
            <div className='goodsComponentItem-top'>
                <img className='goodsComponentItem-photo' src={hoodie1} alt='item' />
                <img className='goodsComponentItem-favorite' src={favorite} alt='fav' />
            </div>
            <h4>EL003 Elleven Checkpoint-Friendly Compu-Backpack</h4>
            <p>EL003 Elleven Checkpoint-Friendly Compu-Backpack</p>
            <ul className='goodsComponentItem-colors'>
                <li className='goodsComponentItem-colors-1'></li>
                <li className='goodsComponentItem-colors-2'></li>
                <li className='goodsComponentItem-colors-3'></li>
            </ul>
            <span>From Price<br /> $76.43</span>
        </div>
    );
};

export default GoodsComponentItem;