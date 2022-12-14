import { useState } from 'react';
import GoodsComponentItem from '../goodsComponentItem/GoodsComponentItem';
import './goodsComponent.css'

const arrow = require('../../images/arrow2.png')
const hoodie1 = require('../../images/hoodie1.png')
const hoodie2 = require('../../images/hoodie2.png')
const hoodie3 = require('../../images/hoodie3.png')

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
        img: `${hoodie1}`,
        price: 94.10
    },
    {
        id: 5,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
        price: 76.47
    },
    {
        id: 6,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
        price: 104.32
    },
    {
        id: 7,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
        price: 84.41
    },
    {
        id: 8,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
        price: 94.10
    },
    {
        id: 9,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
        price: 84.41
    },
    {
        id: 10,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
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
        img: `${hoodie1}`,
        price: 104.32
    },
    {
        id: 13,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
        price: 84.41
    },
    {
        id: 14,
        name: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        desc: 'EL003 Elleven Checkpoint-Friendly Compu-Backpack',
        img: `${hoodie1}`,
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

        <div className='container'>
            <div className='goodsComponent'>
                <ul className='goodsComponent-categoryList'>
                    <li>?????? ????????????</li>
                    <li>??????????????????</li>
                    <li>????????????????</li>
                    <li>????????????????</li>
                    <li>????????</li>
                    <li>??????????????</li>
                    <li>??????????????</li>
                    <li>??????????????</li>
                    <li>??????-??????????/?????????????? </li>
                    <li>??????????</li>
                    <li>??????????</li>
                    <li>??????????</li>
                </ul>
                <ul className='goodsComponent-list'>
                    {goods.slice(0, visible).map((good) => <GoodsComponentItem good={good} key={good.id} />)}
                </ul>
                <div onClick={showMore} className='goodsComponent-showMore'>
                    <span>{visible < goods.length ? '???????????????? ??????' : '???????????? ??????????'}  </span>
                    <img src={arrow} alt='arrow' className={visible > goods.length ? 'hide' : ''} />
                </div>
            </div>
        </div>
    );
};

export default GoodsComponent;