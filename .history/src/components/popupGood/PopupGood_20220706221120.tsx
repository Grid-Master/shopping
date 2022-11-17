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
            <h3>EL003 Elleven Checkpoint-Friendly Compu-Backpack</h3>
            <ul className='goodsComponentItem-colors'>
                <li className='goodsComponentItem-color goodsComponentItem-color-1'></li>
                <li className='goodsComponentItem-color goodsComponentItem-color-2'></li>
                <li className='goodsComponentItem-color goodsComponentItem-color-3'></li>
            </ul>
            <h4>From Price $76.43</h4>
            <p>
                This exclusive design has a designated laptop-only section that unfolds to lay flat on the X-ray belt to increase your speed,
                convenience and security.
                (Pens, Laptop and other devices shown are not included)
            </p>
            <div>

            </div>
        </div>
    );
};

export default PopupGood;