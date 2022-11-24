import React, { useEffect, useState } from 'react';
import AllCarsCard from './AllCarsCard';

const Hyundai = () => {
    const [hyundaiCars, setHyundaiCars]=useState([]);
    useEffect(()=>{
        fetch('Hyundai.json')
        .then(res=> res.json())
        .then(data=> setHyundaiCars(data))
    },[])
    return (
        <div>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                hyundaiCars?.map(cars=> <AllCarsCard key={cars._id} cars={cars}></AllCarsCard>)
            }
           </div>
        </div>
    );
};

export default Hyundai;