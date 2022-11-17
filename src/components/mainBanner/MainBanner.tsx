import './mainBanner.css'

const circle = require('../../images/circle.png')
const girls = require('../../images/girls.png')

const MainBanner: React.FC = () => {
    return (
        <div className='container'>
            <div className='main__banner'>
                <h1>Свежее дыхание в корпоративной жизни</h1>
                <p>Ми вдосконалили процес замовлення продукції для того,
                    щоб Ви і Ваша компанія сконцентрувались на основних задачах і досягали поставлених цілей.</p>
                <ul className='main__banner-list'>
                    <li className='main__banner-list-item'><img className='circle' src={circle} />Высокое качество ONLY</li>
                    <li className='main__banner-list-item'><img className='circle' src={circle} />Поддержка менеджера 24/7</li>
                    <li className='main__banner-list-item'><img className='circle' src={circle} />Выполнение заказа в turbo-режиме</li>
                </ul>
                <img className='girls' src={girls} />
            </div>
        </div>
    );
};

export default MainBanner;