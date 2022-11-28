import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../UserContex/UseContext';
import { Loader } from '../Shared/Loader';
import AdvertisementModal from './AdvertisementModal';
import DashBoardCard from './DashBoardCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [modal, setModal]=useState('')

    const { data: myProduct = [], isLoading, refetch } = useQuery({
        queryKey: ['myProduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://y-sajib63.vercel.app/myProducts?email=${user?.email}`,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json()

            return data;
        }
    })

    const deleteButton = products => {
        const agree = window.confirm(`are you sure to delete ${products.product_name}`)
        if (agree) {
            fetch(`https://y-sajib63.vercel.app/deleteMyProduct/${products._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('successfully deleted')
                    refetch();
                   
                })
                .catch(error => {
                    toast.error(error.message);
                })
        }

    }


 

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='my-10 grid grid-cols-1 md:grid-cols-3'>
            {
                myProduct[0]?.length > 0 &&
                myProduct[0]?.map(product => <DashBoardCard product={product} key={product._id} deleteButton={deleteButton} setModal={setModal}></DashBoardCard>)
            }
            {
                myProduct[1]?.length > 0 &&
                myProduct[1]?.map(product => <DashBoardCard product={product} key={product._id} deleteButton={deleteButton} setModal={setModal}></DashBoardCard>)
            }
            {
                myProduct[2]?.length > 0 &&
                myProduct[2]?.map(product => <DashBoardCard product={product} key={product._id} deleteButton={deleteButton} setModal={setModal}></DashBoardCard>)
            }
            {
                myProduct[3]?.length > 0 &&
                myProduct[3]?.map(product => <DashBoardCard product={product} key={product._id} deleteButton={deleteButton} setModal={setModal}></DashBoardCard>)
            }
            {
                myProduct[4]?.length > 0 &&
                myProduct[4]?.map(product => <DashBoardCard product={product} key={product._id} deleteButton={deleteButton} setModal={setModal}></DashBoardCard>)
            }
            {
                myProduct[5]?.length > 0 &&
                myProduct[5]?.map(product => <DashBoardCard product={product} key={product._id} deleteButton={deleteButton} setModal={setModal}></DashBoardCard>)
            }


            <div>
            <AdvertisementModal modal={modal}></AdvertisementModal>
            </div>

        </div>
    );
};

export default MyProducts;