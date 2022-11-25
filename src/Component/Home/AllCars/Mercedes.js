import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Loader } from '../../Shared/Loader';
import AllCarsCard from './AllCarsCard';

const Mercedes = () => {


    const {data: mercedesCars=[], isLoading}=useQuery({
        queryKey:['mercedes'],
        queryFn: async ()=>{
            const res= await fetch('http://localhost:5000/mercedes')
            const data= await res.json()
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
                mercedesCars?.map(cars=> <AllCarsCard key={cars._id} cars={cars}></AllCarsCard>)
            }
           </div>
        </div>
    );
};

export default Mercedes;