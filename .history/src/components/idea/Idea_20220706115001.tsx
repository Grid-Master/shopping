import './Idea.css'

const rocket1 = require('../../images/rocket1.png')
const rocket2 = require('../../images/rocket2.png')
const lamp = require('../../images/lamp.png')

type Props = {
    background: string
}

const Idia: React.FC<Props> = ({background}) => {
    return (
        <div className='idea-bg' style={{backgroundImage: `${background}`}}>
            <div className='container'>
                <h3 className='idea-title'>У вас своя УНИКАЛЬНАЯ идея по разработке мерча?</h3>
                <p className='idea-desc-1'>Изготовим мерч по вашему дизайну. Расскажем лайфхаки и ознакомим с  технологией производства, предоставим образцы матералов. </p>
                <p className='idea-desc-2'>Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа</p>
                <img className='idea-img-1' src={rocket1} />
                <img className='idea-img-2' src={rocket2} />
                <img className='idea-img-3' src={lamp} />
                <form className='idea-form'>
                    <ul>
                        <input className='idea-form-input' placeholder='Ваше Имя' />
                        <input className='idea-form-input' placeholder='Ваша електронная почта' />
                        <input className='idea-form-input' placeholder='Ваш номер телефона' />
                    </ul>
                    <button>Заказать</button>
                </form>
            </div>
        </div>
    );
};

export default Idia;