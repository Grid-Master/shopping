import './sewingGrid.css'

const sewingGridItem = require('../../images/sewingGridItem.png')

const SewingGrid: React.FC = () => {
    return (
        <div className='sewingGrid-bg'>
            <div className='container'>
                <h2 className='sewingGrid-title'>Мы можем пошить</h2>
                <span className='sewingGrid-desc'>Товары, которые наиболее часто заказывают наши клиенты</span>
                <ul className='sewingGrid-grid'>
                    <li className='sewingGrid-grid-item'>
                        <img src={sewingGridItem} alt='sewingGridItem' />
                        <span>Шапки</span>
                    </li>
                    <li className='sewingGrid-grid-item'>
                        <img src={sewingGridItem} alt='sewingGridItem' />
                        <span>Шапки</span>
                    </li>
                    <li className='sewingGrid-grid-item'>
                        <img src={sewingGridItem} alt='sewingGridItem' />
                        <span>Шапки</span>
                    </li>
                    <li className='sewingGrid-grid-item'>
                        <img src={sewingGridItem} alt='sewingGridItem' />
                        <span>Шапки</span>
                    </li>
                    <li className='sewingGrid-grid-item'>
                        <img src={sewingGridItem} alt='sewingGridItem' />
                        <span>Шапки</span>
                    </li>
                    <li className='sewingGrid-grid-item'>
                        <img src={sewingGridItem} alt='sewingGridItem' />
                        <span>Шапки</span>
                    </li>
                    <li className='sewingGrid-grid-item'>
                        <img src={sewingGridItem} alt='sewingGridItem' />
                        <span>Шапки</span>
                    </li>
                    <li className='sewingGrid-grid-item'>
                        <img src={sewingGridItem} alt='sewingGridItem' />
                        <span>Шапки</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SewingGrid;