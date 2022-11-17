import './popupGood.css'

const PopupGood: React.FC = () => {
    return (
        <div className='popupGood'>
            <div className='popupGood__photos'>
                <img className='popupGood__photos-main' />
                <div className='popupGood__photos-list'>
                    <img className='popupGood__photos-photo' />
                    <img className='popupGood__photos-photo' />
                    <img className='popupGood__photos-photo' />
                </div>
            </div>
            <h3></h3>
            <ul className='goodsComponentItem-colors'>
                <li className='goodsComponentItem-color goodsComponentItem-color-1'></li>
                <li className='goodsComponentItem-color goodsComponentItem-color-2'></li>
                <li className='goodsComponentItem-color goodsComponentItem-color-3'></li>
            </ul>
        </div>
    );
};

export default PopupGood;