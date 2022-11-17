import './goodsTop.css'

const arrow = require('../../images/arrow.png')
const hoodie = require('../../images/hoodie.png')

const GoodsTop: React.FC = () => {
    return (
        <div className='container'>
            <div className='goodsTop'>
                <h2>купить чашку с логотипом</h2>
                <p>
                    Чашки с логотипом - это классика. Любая конференция или бизнес встреча не обойдется без данного реквизина.
                    Так же  это прекрасный подарок для ваших сотрудников, деловых партнеров, друзей или постоянных клиентов .
                    Владельцы заведений общественного питания могут заказать крупные партии чашек для своего ресторана или кафе.
                    Также вы можете распространять эти изделия во время рекламных мероприятий, презентаций, выставок или конференций.
                </p>
                <div className='goodsTop-showMore'>
                <span>Показать еще</span>
                <img src={arrow} />
                </div>
                <img src={hoodie} alt='hoodie' />
            </div>
        </div>
    );
};

export default GoodsTop;