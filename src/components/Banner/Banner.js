import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.png';
import banner2 from '../../images/banner2.png';
import banner3 from '../../images/banner3.png';

const Banner = () => {
    return (
        <>
        <Carousel className='mb-5'>
            <Carousel.Item interval={1000}>
                <img className="d-block h-50 w-100" src={banner1} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img className="d-block w-100" src={banner2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={banner3} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Banner;