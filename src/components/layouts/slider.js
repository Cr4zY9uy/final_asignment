import './slider.css';
import Carousel from 'react-bootstrap/Carousel';
function Slider() {
    return (
        <Carousel >
            <Carousel.Item interval={1000}>
                <img src={process.env.PUBLIC_URL + "./images/OIP.jfif"} alt='slider' width={"100%"} height={"450px"} />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src={process.env.PUBLIC_URL + "./images/OIP.jfif"} alt='slider' width={"100%"} height={"450px"} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={process.env.PUBLIC_URL + "./images/OIP.jfif"} alt='slider' width={"100%"} height={"450px"} />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;