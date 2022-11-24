import React, { useEffect, useState } from 'react';
import AllCarsCard from './AllCarsCard';

const Mercedes = () => {

    const [mercedesCars, setBmwCars]=useState([]);
    useEffect(()=>{
        fetch('Mercedes.json')
        .then(res=> res.json())
        .then(data=> setBmwCars(data))
    },[])
    return (
        <div>
               <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                mercedesCars?.map(cars=> <AllCarsCard key={cars._id} cars={cars}></AllCarsCard>)
            }
           </div>
        </div>
    );
};

export default Mercedes;