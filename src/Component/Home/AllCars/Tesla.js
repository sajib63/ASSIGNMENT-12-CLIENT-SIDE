import React, { useEffect, useState } from 'react';
import AllCarsCard from './AllCarsCard';

const Tesla = () => {
    const [teslaCars, setTeslaCars]=useState([]);
    useEffect(()=>{
        fetch('tesla.json')
        .then(res=> res.json())
        .then(data=> setTeslaCars(data))
    },[])
    return (
        <div>
            
           
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                teslaCars?.map(cars=> <AllCarsCard key={cars._id} cars={cars}></AllCarsCard>)
            }
           </div>
        </div>
    );
};

export default Tesla;