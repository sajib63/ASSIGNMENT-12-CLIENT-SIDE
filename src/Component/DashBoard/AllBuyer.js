import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Loader } from '../Shared/Loader';

const AllBuyer = () => {
    const { data: sellers = [], isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers')
            const data = await res.json()
            return data
        }
    })
    

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='my-8'>
        <div className="overflow-x-auto ">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        sellers?.map((buyers, i) => <tr>
                            <th>{i + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={buyers?.imageUrl} className="rounded-full" alt='' />
                                    </div>
                                </div>

                            </td>
                            <td>{buyers?.name}</td>
                            <td>{buyers?.email}</td>
                            <td>
                                
                                <button className='btn bg-red-600 btn-sm border-0'>delete</button>
                                
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllBuyer;