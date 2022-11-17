import './popupGood.css'

const PopupGood: React.FC = () => {
    return (
        <div className='popupGood'>
            <div className='popupGood__photos'>
                <img className='popupGood__photos-main' />
                <div className='popupGood__photos-list'>
                    <img />
                    <img />
                    <img />
                </div>
            </div>
        </div>
    );
};

export default PopupGood;