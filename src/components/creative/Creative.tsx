import './creative.css'

const creative = require('../../images/creative.png')
const creativePhoto = require('../../images/creativePhoto.png')

const Creative: React.FC = () => {
    return (
        <div className='creative-bg'>
            <div className='container'>
                <div className='creative'>
                    <img className='creative-title' src={creative} alt='creative' />
                    <h2>Хотите удивить ваших коллег/партнеров необычными подарками?</h2>
                    <p>Выбирайте готовые подарочные наборы или укажите критерии по которым мы соберем для Вас уникальный бокс.</p>
                    <div className='creative__buttons'>
                        <button className='creative__buttons-1'>Перейти к наборам</button>
                        <button className='creative__buttons-2'>Создать свой</button>
                    </div>
                    <img className='creative-photo' src={creativePhoto} alt='creative photo' />
                </div>
            </div>
        </div>
    );
};

export default Creative;