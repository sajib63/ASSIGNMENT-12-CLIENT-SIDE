import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

import { Loader } from '../Shared/Loader';


const AllSeller = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers')
            const data = await res.json()
            return data
        }
    })

    const deleteSeller = sellerData => {
        const agree = window.confirm(`are you sure to delete ${sellerData.name}`)
        if (agree) {
            fetch(`http://localhost:5000/allSeller/${sellerData._id}`, {
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

    const verifySeller=users=>{

        fetch(`http://localhost:5000/allSeller/${users._id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`successfully updated ${users.name}`)
                refetch();
            })
            .catch(error => {
                toast.error(error.message)


            })

    }


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
                            sellers?.map((seller, i) => <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src={seller?.imageUrl} className="rounded-full" alt='' />
                                        </div>
                                    </div>

                                </td>
                                <td>{seller?.name}</td>
                                <td>{seller?.email}</td>
                                <td>

                                    {
                                        seller?.verification !== "verified" ? <button onClick={()=>verifySeller(seller)} className='btn btn-primary mx-3 btn-sm' >verify</button>
                                            :
                                            <button className='btn bg-green-600 border-0 mx-3 btn-sm'>verified</button>
                                    }




                                    <button onClick={() => deleteSeller(seller)} className='btn bg-red-600 btn-sm border-0'>delete</button>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;