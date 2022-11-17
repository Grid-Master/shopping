import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './present.css'
import PresentPhoto from "./PresentPhoto";

const sweater = require('../../images/presentSweaters.png')
const eclipse = require('../../images/Ellipse2.png')
const photo1 = require('../../images/presentPhoto1.png')
const photo2 = require('../../images/presentPhoto2.png')
const photo3 = require('../../images/presentPhoto3.png')
const photo4 = require('../../images/presentPhoto4.png')
const photo5 = require('../../images/presentPhoto1.png')
const photo6 = require('../../images/presentPhoto4.png')
const photo7 = require('../../images/presentPhoto2.png')

const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7
]

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Present: React.FC = () => {
    return (
        <div className='container'>
            <div className='present'>
                <div className="present-sweater">
                    <img className="ellipse ellipse-left" src={eclipse} alt='eclipse' />
                    <img src={sweater} alt='sweater' />
                    <img className="ellipse ellipse-right" src={eclipse} alt='eclipse' />
                </div>
                <div className='present-info'>
                    <h3>Помимо готовой продукции высокого качества, мы можем для Вас произвести одежду, аксессуры, вкусности и другое под заказ.</h3>
                    <p>Благодаря личному производству мы изготавливаем большие партии в короткие сроки, а так же у Вас всегда есть возможность кастомизировать изделия.</p>
                    <Carousel
                        swipeable={true}
                        responsive={responsive}
                        infinite={true}
                        customTransition="transform 300ms ease-in-out"
                        transitionDuration={300}
                        containerClass="carousel-container"
                    >
                        {photos.map((photo => <PresentPhoto photo={photo} />))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Present;