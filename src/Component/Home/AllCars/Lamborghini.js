import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Loader } from '../../Shared/Loader';
import AllCarsCard from './AllCarsCard';
import AllCarsModal from './AllCarsModal';
import ReportModal from './ReportModal';

const Lamborghini = () => {
    const [modalData, setModalData]=useState('')
    const [report, setReport]=useState('')

    const {data: lamborghiniCars=[], isLoading}=useQuery({
        queryKey:['lamborghini'],
        queryFn: async ()=>{
            const res= await fetch('https://y-sajib63.vercel.app/lamborghini')
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
                lamborghiniCars?.map(cars=> <AllCarsCard key={cars._id} cars={cars} setModalData={setModalData} setReport={setReport}></AllCarsCard>)
            }
           </div>
           <AllCarsModal modalData={modalData}></AllCarsModal>
           <ReportModal report={report}></ReportModal>
        </div>
    );
};

export default Lamborghini;