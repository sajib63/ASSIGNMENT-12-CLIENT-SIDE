import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Loader } from '../Shared/Loader';

const AllBuyer = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://y-sajib63.vercel.app/buyers',{
                headers:{
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    

    if (isLoading) {
        return <Loader></Loader>
    }
    const deleteSeller = sellerData => {
        const agree = window.confirm(`are you sure to delete ${sellerData.name}`)
        if (agree) {
            fetch(`https://y-sajib63.vercel.app/allBuyers/${sellerData._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(`successfully deleted ${sellerData.name}`)
                    refetch();
                })
                .catch(error => {
                    toast.error(error.message)


                })
        }
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
                        sellers?.map((buyers, i) => <tr key={buyers._id}>
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
                                
                                <button onClick={()=>deleteSeller(buyers)} className='btn bg-red-600 btn-sm border-0'>delete</button>
                                
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