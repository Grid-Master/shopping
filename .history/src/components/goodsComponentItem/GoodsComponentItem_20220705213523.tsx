import './goodsComponentItem.css'

const GoodsComponentItem: React.FC = () => {
    return (
        <div className='goodsComponentItem'>
            <div className='goodsComponentItem-top'>
            <img className='goodsComponentItem-photo' src=''  alt='item'/>
            <img className='goodsComponentItem-favorite' alt='fav'/>
            </div>

        </div>
    );
};

export default GoodsComponentItem;