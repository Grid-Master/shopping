import { useState } from 'react';
import { IGood } from '../../units/interface';
import GoodsComponentItem from '../goodsComponentItem/GoodsComponentItem';
import './goodsComponent.css'

const arrow = require('../../images/arrow2.png')
const hoodie1 = require('../../images/hoodie1.png')
const hoodie2 = require('../../images/hoodie2.png')
const hoodie3 = require('../../images/hoodie3.png')
const hoodie4 = require('../../images/hoodie4.png')
const hoodie5 = require('../../images/hoodie5.png')
const hoodie6 = require('../../images/hoodie6.png')
const hoodie7 = require('../../images/hoodie7.png')
const hoodie8 = require('../../images/hoodie8.png')

const goods: IGood[] = [
    {
        id: 1,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie2}`,
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
        img: `${hoodie3}`,
        price: 84.41
    },
    {
        id: 4,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie4}`,
        price: 94.10
    },
    {
        id: 5,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie5}`,
        price: 76.47
    },
    {
        id: 6,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie6}`,
        price: 104.32
    },
    {
        id: 7,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie7}`,
        price: 84.41
    },
    {
        id: 8,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie8}`,
        price: 94.10
    },
    {
        id: 9,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie3}`,
        price: 84.41
    },
    {
        id: 10,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie2}`,
        price: 94.10
    },
    {
        id: 11,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
        price: 76.47
    },
    {
        id: 12,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie5}`,
        price: 104.32
    },
    {
        id: 13,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie4}`,
        price: 84.41
    },
    {
        id: 14,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie6}`,
        price: 94.10
    },
    {
        id: 15,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie8}`,
        price: 94.10
    },
]

const GoodsComponent: React.FC = () => {
    const [items, setItems] = useState<IGood[]>(goods)
    const [visible, setVisible] = useState<number>(8)

    const showMore = () => {
        if (visible < goods.length) {
            setVisible(prevValue => prevValue + 8)
        }
        else if (visible > goods.length) {
            setVisible(8)
        }
    }


    return (
            <div className='goodsComponent-container'>
            <div className='goodsComponent-categoryList-bg'>
                <div className='container'>
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
                        <div className='goodsComponent-categoryList-bar'></div>
                    </ul>
                </div>
                <div className='zzz'></div>
            </div>
            <div className='container'>
                <div className='goodsComponent'>
                    <ul className='goodsComponent-list'>
                        {goods.slice(0, visible).map((good) => <GoodsComponentItem good={good} key={good.id} />)}
                    </ul>
                    <div onClick={showMore} className='goodsComponent-showMore'>
                        <span>{visible < goods.length ? 'Показать еще' : 'Скрыть назад'}  </span>
                        <img src={arrow} alt='arrow' className={visible > goods.length ? 'hide' : ''} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoodsComponent;