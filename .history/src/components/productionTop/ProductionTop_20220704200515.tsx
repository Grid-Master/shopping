import './productionTop.css'

const productionGirl = require('../../images/productionGirl.png')

const ProductionTop: React.FC = () => {
    return (
        <div className='container'>
            <div className='productionTop'>
                <h2>Нужно создать уникальный продукт для вашей компании?</h2>
                <p>Почему? Потому что это ощутимо и это волнует. Это вовлекает, повышает осведомленность и вызывает эмоции.</p>
                <button>Написать менеджеру</button>
                <img src={productionGirl} />
            </div>
        </div>
    );
};

export default ProductionTop;