import React from 'react';
import Bannar from './Bannar';
import About from '../About/About';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Review></Review>
        </div>
    );
};

export default Home;