import GoodsComponentItem from '../goodsComponentItem/GoodsComponentItem';
import './goodsComponent.css'

interface IGood {
    id: number;
    name: string;
    desc: string;
    img: string;
    price: number;
}

const GOODS = [{

}]

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