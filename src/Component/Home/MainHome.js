import React from 'react';
import AllProducts from './AllProducts';
import Carousel from '../Home/Carousel/Carouselapp'





const MainHome = () => {
    return (
        <div>
            <div>
               <Carousel></Carousel>
            </div>

            <div className='my-12'>
            <AllProducts></AllProducts>

            </div>
        </div>
    );
};

export default MainHome;