import React from 'react';

const AdvertisementCard = ({ product }) => {
    const { picture, product_name, sell_price} = product;
   
    return (
        <div className=" mx-auto ">
          
            <div className="">


                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src={picture}
                            alt="Person"
                        />
                      

                        <h1 className='-mt-10 text-white text-sm font-semibold ml-3'>{product_name}  <span> ${parseInt(sell_price%100)}% Dis</span></h1>

                       
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AdvertisementCard;