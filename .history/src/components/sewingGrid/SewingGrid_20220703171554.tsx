import './sewingGrid.css'

const SewingGrid: React.FC = () => {
    return (
        <div className='sewingGrid-bg'>
            <div className='container'>
                <h2 className='sewingGrid-title'>Мы можем пошить</h2>
                <span className='sewingGrid-desc'>Товары, которые наиболее часто заказывают наши клиенты</span>
                <ul className='sewingGrid-grid'>
                    <li>
                        <img />
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SewingGrid;