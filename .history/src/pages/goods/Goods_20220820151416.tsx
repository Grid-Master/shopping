import GoodsComponent from '../../components/goodsComponent/GoodsComponent';
import GoodsTop from '../../components/goodsTop/GoodsTop';
import Header from '../../components/header/Header';
import Idea from '../../components/idea/Idea';
import Navbar from '../../components/navbar/Navbar';
import './goods.css'

const Goods: React.FC = () => {
    return (
        <div className='goods'>
            <Header />
            <Navbar />
            <GoodsTop />
            <GoodsComponent />
            <Idea background='none' />
        </div>
    );
};

export default Goods;