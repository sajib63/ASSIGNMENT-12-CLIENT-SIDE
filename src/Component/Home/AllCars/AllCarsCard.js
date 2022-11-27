import React from 'react';
import { FaCheck } from "react-icons/fa";


const AllCarsCard = ({ cars , setModalData}) => {


    const { purchase_Price, sell_price, picture, age, time, seller_name, product_name, phone, address , verification} = cars;
    return (
        <div className='p-4'>
            <div className="card  bg-white shadow-xl px-4 lg:px-0">
                <figure><img src={picture} className="h-full md:h-[250px] lg:h-[300px] lg:w-full" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-sm lg:text-2xl">
                        {product_name}
                        
                    </h2>
                    <p>Use: {age} Month</p>
                  
                    <p className='inline'>Seller: {seller_name} {verification ==="verified"?   <span><FaCheck className='inline-block text-primary'></FaCheck></span>: ''
                    
                    
                    }</p>
                   
                   
                    <p >Purchase-Price: ${purchase_Price}</p>
                    <p >Sell-Price: ${sell_price}</p>
                    <p >Address: {address}</p>
                    <p >Phone: {phone}</p>
                    <p >Post: {time}</p>
                    <div className="card-actions justify-between">
                        <button className='btn bg-blue-600 border-0 hover:text-red-700'>Report</button>

                      
                        <label onClick={()=>setModalData(cars)} htmlFor="allCarsModal" className='btn bg-primary'>Book now</label>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AllCarsCard;