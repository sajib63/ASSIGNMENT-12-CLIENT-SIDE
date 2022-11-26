import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../UserContex/UseContext';
import { Loader } from '../Shared/Loader';
import DashBoardCard from './DashBoardCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: myProduct = [], isLoading } = useQuery({
        queryKey: ['myProduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
            const data = await res.json()

            return data;
        }
    })


console.log(myProduct);


    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='my-10 grid grid-cols-1 md:grid-cols-3'>
            {
                myProduct[0]?.length > 0 &&
                myProduct[0]?.map(product => <DashBoardCard product={product} key={product._id}></DashBoardCard>)
            }
            {
                myProduct[1]?.length > 0 &&
                myProduct[1]?.map(product => <DashBoardCard product={product} key={product._id}></DashBoardCard>)
            }
            {
                myProduct[2]?.length > 0 &&
                myProduct[2]?.map(product =>  <DashBoardCard product={product} key={product._id}></DashBoardCard>)
            }
            {
                myProduct[3]?.length > 0 &&
                myProduct[3]?.map(product =>  <DashBoardCard product={product} key={product._id}></DashBoardCard>)
            }
            {
                myProduct[4]?.length > 0 &&
                myProduct[4]?.map(product => <DashBoardCard product={product} key={product._id}></DashBoardCard>)
            }
            {
                myProduct[5]?.length > 0 &&
                myProduct[5]?.map(product => <DashBoardCard product={product} key={product._id}></DashBoardCard>)
            }
        </div>
    );
};

export default MyProducts;