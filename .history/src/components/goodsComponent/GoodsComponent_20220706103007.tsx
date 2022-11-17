import GoodsComponentItem from '../goodsComponentItem/GoodsComponentItem';
import './goodsComponent.css'

interface IGood {
    id: number;
    name: string;
    desc: string;
    img: string;
    price: number;
}

const goods: IGood[] = [
    {
        id: 1,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: '../../images/hoodie1.png',
        price: 76.47
    }
]

const GoodsComponent: React.FC = () => {
    return (
        <div className='container'>
            <div className='goodsComponent'>
                <ul className='goodsComponent-categoryList'>
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
                <GoodsComponentItem />
            </div>
        </div>
    );
};

export default GoodsComponent;