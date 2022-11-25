import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Loader } from '../../Shared/Loader';
import AllCarsCard from './AllCarsCard';

const Hyundai = () => {
  

    const {data: hyundaiCars=[], isLoading}=useQuery({
        queryKey:['hyundai'],
        queryFn: async ()=>{
            const res=await fetch('http://localhost:5000/hyundai')
            const data =await res.json()
            return data
        }

    })

    if(isLoading){
        return <Loader></Loader>
    }
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