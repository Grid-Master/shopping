import './sewingInfo.css'

const SewingInfo: React.FC = () => {
    return (
        <div className='container'>
            <ul className='sewingInfo'>
                <li className='sewingInfo-item'>
                    <h3>Сроки изготовления</h3>
                    <p>Сроки пошива будут зависеть от объема Вашего заказа и сложности моделей.
                        В среднем изготовление корпоративной продукции занимает 10 -18 рабочих дней с момента утверждения всех деталей.
                    </p>
                    <p>Если же Вам нужно "на вчера" - Вы можете согласовать такие условия со своим личным менеджером</p>
                </li>
                <li className='sewingInfo-item'>
                    <h3>Стоимость</h3>
                    <p></p>
                </li>
                <li className='sewingInfo-item'>
                    <h3>Брендирование</h3>
                    <p></p>
                </li>
            </ul>
        </div>
    );
};

export default SewingInfo;