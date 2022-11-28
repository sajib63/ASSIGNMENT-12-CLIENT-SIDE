import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContex/UseContext';
import { Loader } from '../Shared/Loader';

const MyOrders = () => {
const {user}=useContext(AuthContext)
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['getBooking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/getBooking?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
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
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, i) => <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src={product?.picture} className="rounded-full" alt='' />
                                        </div>
                                    </div>

                                </td>
                                <td>{product?.product_name
                                }</td>
                                <td>{product?.sell_price
                                }</td>
                                 <td>
                                        {
                                            product?.sell_price
                                            && !product?.paid && <Link
                                            to={`/dashboard/payment/${product._id}`}
                                            >
                                            <button className='btn btn-primary btn-sm'>Pay</button>
                                            </Link>

                                        }
                                        {
                                            product?.sell_price
                                            && product?.paid && <span className='text-primary'>Paid</span>

                                        }
                                    </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;