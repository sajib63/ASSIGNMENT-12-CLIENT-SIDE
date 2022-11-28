import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Loader } from '../../Shared/Loader';
import AllCarsCard from './AllCarsCard';
import AllCarsModal from './AllCarsModal';
import ReportModal from './ReportModal';

const Bmw = () => {
    const [modalData, setModalData]=useState('')
    const [report, setReport]=useState('')

    const {data: bmwCars=[], isLoading}=useQuery({
        queryKey:['hyundai'],
        queryFn: async ()=>{
            const res=await fetch('https://y-sajib63.vercel.app/bmw')
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
                bmwCars?.map(cars=> <AllCarsCard key={cars._id} cars={cars} setModalData={setModalData} setReport={setReport}></AllCarsCard>)
            }
           </div>

           <AllCarsModal modalData={modalData}></AllCarsModal>
           <ReportModal report={report}></ReportModal>
        </div>
    );
};

export default Bmw;