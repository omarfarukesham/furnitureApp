import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Features from './Features';
import Footer from './Footer';
import LatestProduct from './LatestProduct';
import Offer from './Offer';
import TrendingProd from './TrendingProd';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Features></Features>
            <LatestProduct></LatestProduct>
            <Offer></Offer>
            <Banner2></Banner2>
            <TrendingProd></TrendingProd>
            <Footer></Footer>
        </>
    );
};

export default Home;