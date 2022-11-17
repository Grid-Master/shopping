import './sewingInfo.css'

const SewingInfo: React.FC = () => {
    return (
        <div className='container'>
            <ul className='sewingInfo'>
                <li className='sewingInfo-item'>
                    <h3>Сроки изготовления</h3>
                    <p></p>
                    <p></p>
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