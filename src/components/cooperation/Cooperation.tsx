import Carousel from 'react-multi-carousel';
import './cooperation.css';

const nike = require('../../images/nike.png')
const cola = require('../../images/cola.png')
const atlas = require('../../images/atlas.png')
const megogo = require('../../images/megogo.png')
const crazybox = require('../../images/crazybox.png')

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1
    }
};

const Cooperation: React.FC = () => {
    return (
        <div className='container'>
            <div className='cooperation'>
                <h2 className='cooperation-title'>С нами соотрудничают</h2>
                <Carousel
                    swipeable={true}
                    responsive={responsive}
                    infinite={true}
                    customTransition="transform 500ms ease-in-out"
                    transitionDuration={300}
                    containerClass="carousel-container2"
                >
                    <img src={nike} />
                    <img src={cola} />
                    <img src={atlas} />
                    <img src={megogo} />
                    <img src={crazybox} />
                </Carousel>
            </div>
        </div>
    );
};

export default Cooperation;