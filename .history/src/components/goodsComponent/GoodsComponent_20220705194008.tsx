import './goodsComponent.css'

const GoodsComponent: React.FC = () => {
    return (
        <div className='container'>
            <div className='goodsContainer'>
                <ul className='goodsContainer-categoryList'>
                    <li>Все товары</li>
                    <li>Толстовки</li>
                    <li>Свитшоты</li>
                    <li>Футболки</li>
                    <li>Поло</li>
                    <li>Жилетки</li>
                    <li>Рюкзаки</li>
                    <li>Бананки</li>
                    <li>Эко-сумки/Шопперы </li>
                    <li>Пледы</li>
                    <li>Носки</li>
                    <li>Маски</li>
                </ul>
            </div>
        </div>
    );
};

export default GoodsComponent;