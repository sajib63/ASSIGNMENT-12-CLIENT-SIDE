import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Loader } from '../Shared/Loader';
import AdvertisementCard from './Carousel/AdvertisementCard';



const AdvertisementProduct = () => {
    const {data:advertisement=[], isLoading}=useQuery({
        queryKey:['advertisement'],
        queryFn:async ()=>{
            const res=await fetch('http://localhost:5000/advertisement')
            const data=await res.json();
            return data;

        }

    })
 
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div className=''>
            <h1 className='text-3xl font-semibold mb-8 text-primary text-center'>Advertisement Products</h1>

           <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            
           {
                advertisement?.map(product=><AdvertisementCard
                key={product._id}
                product={product}
                ></AdvertisementCard>)
            }
           </div>
            
        </div>
    );
};

export default AdvertisementProduct;