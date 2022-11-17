import './goodsComponentItem.css'

const GoodsComponentItem: React.FC = () => {
    return (
        <div className='goodsComponentItem'>
            <div className='goodsComponentItem-top'>
                <img className='goodsComponentItem-photo' src='' alt='item' />
                <img className='goodsComponentItem-favorite' src='' alt='fav' />
            </div>
            <h4></h4>
            <p></p>
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