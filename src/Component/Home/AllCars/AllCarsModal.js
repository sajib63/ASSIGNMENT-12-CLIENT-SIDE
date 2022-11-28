import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../UserContex/UseContext';

const AllCarsModal = ({ modalData }) => {

    const { purchase_Price, sell_price, picture, age, time, seller_name, product_name, phone, address, verification } = modalData;
    const { user } = useContext(AuthContext)

    const bookNowButton = event => {
        event.preventDefault();
        const number = event.target.number.value;
        const meetingAddress = event.target.meeting.value;
        const email = event.target.email.value;
        
        const productInfo = {
            purchase_Price,
            sell_price,
            picture,
            age,
            time,
            email,
            seller_name,
            product_name,
            phone,
            address,
            verification,
            buyerNumber: number,
            meetingAddress

        }

        fetch('http://localhost:5000/booking', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productInfo)
          })
          .then(res=> res.json())
          .then(data =>{
            toast.success('successfully added on server')
            event.target.reset();
          })
          .catch(error=>{
            toast.error(error.message);
          })
            

    }
    return (
        <div>
            <input type="checkbox" id="allCarsModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="allCarsModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>

                    <form onSubmit={bookNowButton} className='grid grid-cols-1 gap-3 mt-10'>




                        <input type="text" name='name' disabled defaultValue={user?.displayName} className="input input-bordered input-black w-full" />
                        <input type="email" name='email' disabled defaultValue={user?.email} className="input input-bordered input-black w-full" />

                        <input type="email" name='price' disabled defaultValue={sell_price} className="input input-bordered input-black w-full" />

                        <input type="number" name='number' placeholder="PhoneNumber" className="input input-bordered input-black w-full" />

                        <input type="text" name='meeting' placeholder="Type your meeting location" className="input input-bordered input-black w-full" />
                        <br />
                        <input className='btn  w-full btn-primary' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AllCarsModal;