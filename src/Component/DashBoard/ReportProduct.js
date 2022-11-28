import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Loader } from '../Shared/Loader';
import ReportCard from './ReportCard';

const ReportProduct = () => {
    const { data: reportData = [], isLoading } = useQuery({
        queryKey: ['reportProduct'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportProduct')
            const data = await res.json();
            return data
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h1 className="text-6xl">Reported Data</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reportData?.map(report => <ReportCard key={report.key} report={report}></ReportCard>)
            }
            </div>
        </div>
    );
};

export default ReportProduct;