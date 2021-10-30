import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';

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