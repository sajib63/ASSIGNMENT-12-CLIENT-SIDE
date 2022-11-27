import { useQuery } from '@tanstack/react-query';
import React, {  useState } from 'react';
import { Loader } from '../../Shared/Loader';
import AllCarsCard from './AllCarsCard';
import AllCarsModal from './AllCarsModal';

const Audi = () => {
 const [modalData, setModalData]=useState('')

    const {data: audiCars=[], isLoading}=useQuery({
        queryKey:['hyundai'],
        queryFn: async ()=>{
            const res=await fetch('http://localhost:5000/audi')
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
                audiCars?.map(cars=> <AllCarsCard key={cars._id} cars={cars} setModalData={setModalData}></AllCarsCard>)
            }
           </div>

           <AllCarsModal modalData={modalData}></AllCarsModal>
        </div>
    );
};

export default Audi;