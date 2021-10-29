import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Packages/Packages';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;