import React from 'react';

const AllCarsCard = ({ cars }) => {

    const { purchase_Price, sell_price, picture, age, time, seller_name, product_name, phone, address } = cars;
    return (
        <div className='p-4'>
            <div className="card  bg-base-100 shadow-xl px-4 lg:px-0">
                <figure><img src={picture} className="h-full md:h-[250px] lg:h-[300px] lg:w-full" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-sm lg:text-2xl">
                        {product_name}
                        
                    </h2>
                    <p>Use: {age} Month</p>
                    <p >Seller: {seller_name}</p>
                    <p >Purchase-Price: {purchase_Price}</p>
                    <p >Sell-Price: {sell_price}</p>
                    <p >Address: {address}</p>
                    <p >Phone: {phone}</p>
                    <p >Post: {time}</p>
                    <div className="card-actions justify-end">
                        <button className='btn bg-primary'>Book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCarsCard;