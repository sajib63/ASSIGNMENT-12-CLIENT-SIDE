import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AdvertisementModal = ({ modal }) => {
const [amount, setAmount]=useState('')
    const { purchase_Price, sell_price, picture, age, time, seller_name, product_name, phone, address, verification } = modal;


    const AdvertisementButton=event=>{
        event.preventDefault();
      const advertisementProducts={
        purchase_Price, sell_price, picture, age, time, seller_name, product_name, phone, address, verification, amount
      }

      fetch('http://localhost:5000/advertisement', {
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(advertisementProducts)
      })
      .then(res=> res.json())
      .then(data =>{
        toast.success('successfully added on server')
        event.target.reset();
      })
      .catch(error=>{
        console.log(error);
      })
        
     

    }
const findAmount=event=>{
    const amount=event.target.value * 2;
    
    
    setAmount(amount)

   
}

    return (
        <div>

            <input type="checkbox" id="advirtisementModal" className="modal-toggle" />
            <div className="modal">

                <form onSubmit={AdvertisementButton} className="modal-box">
                    <label htmlFor="advirtisementModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">{product_name}</h3>
                    <h3 className="font-bold text-2xl">Per Day: $2</h3>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Days</span>
                            </label>
                            <input onChange={findAmount} type="number" required name='day' placeholder="Day" className="input input-sm input-bordered input-primary" />
                        </div>

                        <p className='text-2xl mt-2'>Total Amount: ${amount}</p>

                        
                 
                    
                    <input  type="submit" className='btn btn-primary w-full my-5' value="Submit" />
                  
                </form>
            </div>
        </div>
    );
};

export default AdvertisementModal;