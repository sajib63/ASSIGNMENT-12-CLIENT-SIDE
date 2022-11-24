import React, { useEffect, useState } from 'react';
import AllCarsCard from './AllCarsCard';

const Audi = () => {
    const [audiCars, setAudiCars]=useState([]);
    useEffect(()=>{
        fetch('audi.json')
        .then(res=> res.json())
        .then(data=> setAudiCars(data))
    },[])
    return (
        <div>
           


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                audiCars?.map(cars=> <AllCarsCard key={cars._id} cars={cars}></AllCarsCard>)
            }
           </div>
        </div>
    );
};

export default Audi;