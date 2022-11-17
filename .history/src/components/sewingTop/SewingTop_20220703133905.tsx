import './sewingTop.css'

const hoodie = require('../../images/hoodie.png')

const SewingTop: React.FC = () => {
    return (
        <div className='container'>
            <div className='sewingTop'>
                <h2>Современный мерч создает современные бренды</h2>
                <p>Почему? Потому что это ощутимо и это волнует. Это вовлекает, повышает осведомленность и вызывает эмоции.</p>
                <p>Наша команда всегда погружается в концепт заказа для того, чтобы предложить вам лучшее решение, при этом оптимизировать затраты.</p>
                <p> У нас широкий ассортимент  готовых моделей, так же изготовим любую продукцию по Вашему дизайну.</p>
            </div>
            <div className='sewingTop-buttonDiv'>
                <button>Оставить заявку</button>
                <span>Минимальное кол-во: 25</span>
            </div>
            <img src={hoodie} />
        </div>
    );
};

export default SewingTop;