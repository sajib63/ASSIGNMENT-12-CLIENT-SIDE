import React from 'react';
import AllProducts from './AllProducts';
import Carousel from '../Home/Carousel/Carouselapp'





const MainHome = () => {
    return (
        <div>
            <div>
               <Carousel></Carousel>
            </div>
            <AllProducts></AllProducts>
        </div>
    );
};

export default MainHome;