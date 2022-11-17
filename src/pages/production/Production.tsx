import './production.css'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import SewingGrid from '../../components/sewingGrid/SewingGrid';
import ProductionTop from '../../components/productionTop/ProductionTop';
import SewingInfo from '../../components/sewingInfo/SewingInfo';

const Production: React.FC = () => {
    return (
        <div className='production'>
            <ProductionTop />
            <SewingGrid />
            <SewingInfo />
        </div>
    );
};

export default Production;