import React from 'react';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';
import Packages from './Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;