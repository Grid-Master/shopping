import MyFooter from '../../components/footer/MyFooter';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import SewingGrid from '../../components/sewingGrid/SewingGrid';
import SewingInfo from '../../components/sewingInfo/SewingInfo';
import SewingTop from '../../components/sewingTop/SewingTop';
import './sewing.css'

const Sewing: React.FC = () => {
    return (
        <div className='sewing'>
                <Header />
                <Navbar />
                <SewingTop />
            <SewingGrid />
            <SewingInfo />
        </div>
    );
};

export default Sewing;