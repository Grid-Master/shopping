import GoodsComponentItem from '../goodsComponentItem/GoodsComponentItem';
import './goodsComponent.css'

const hoodie1 = require('../../images/hoodie1.png')

export interface IGood {
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
        img: `${hoodie1}`,
        price: 76.47
    },
    {
        id: 2,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
        price: 104.32
    },
    {
        id: 3,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
        price: 84.41
    },
    {
        id: 4,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
        price: 94.10
    },
]

const GoodsComponent: React.FC = () => {
    console.log(hoodie1)
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
                <ul className='goodsComponent-list'>
                    {goods.map((good) => <GoodsComponentItem good={good} />)}
                </ul>
            </div>
        </div>
    );
};

export default GoodsComponent;