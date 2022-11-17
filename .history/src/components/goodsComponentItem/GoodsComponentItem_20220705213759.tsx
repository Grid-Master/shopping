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
                <li></li>
            </ul>
        </div>
    );
};

export default GoodsComponentItem;