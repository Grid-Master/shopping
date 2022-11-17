import Cooperation from '../../components/cooperation/Cooperation';
import Creative from '../../components/creative/Creative';
import Header from '../../components/header/Header';
import Idea from '../../components/idea/Idea';
import MainBanner from '../../components/mainBanner/MainBanner';
import MostPopular from '../../components/mostPopular/MostPopular';
import Navbar from '../../components/navbar/Navbar';
import Present from '../../components/present/Present';
import './main.css'

const Main: React.FC = () => {
    return (
        <div className='main'>
            <Header />
            <Navbar />
            <MainBanner />
            <MostPopular />
            <Creative />
            <Present />
            <Idea />
            <Cooperation />
        </div>
    );
};

export default Main;