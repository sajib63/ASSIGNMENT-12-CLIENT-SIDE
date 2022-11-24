import React, { useEffect, useState } from 'react';
import AllCarsCard from './AllCarsCard';

const Lamborghini = () => {
    const [lamborghiniCars, setLamborghiniCars]=useState([]);
    useEffect(()=>{
        fetch('Lamborghini.json')
        .then(res=> res.json())
        .then(data=> setLamborghiniCars(data))
    },[])
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                lamborghiniCars?.map(cars=> <AllCarsCard key={cars._id} cars={cars}></AllCarsCard>)
            }
           </div>
        </div>
    );
};

export default Lamborghini;