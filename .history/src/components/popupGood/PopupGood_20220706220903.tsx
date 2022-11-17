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
            
        </div>
    );
};

export default PopupGood;