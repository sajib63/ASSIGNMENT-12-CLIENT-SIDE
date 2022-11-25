import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AllCarsCard from './AllCarsCard';

const Tesla = () => {
 

    const {data:teslaCars=[], isLoading}=useQuery({
        queryKey:['tesla'],
        queryFn: async ()=>{
            const res= await fetch('http://localhost:5000/tesla')
            const data = await res.json()
            return data
        }
    })
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