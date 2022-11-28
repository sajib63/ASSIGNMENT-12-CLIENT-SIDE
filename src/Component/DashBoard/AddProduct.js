import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContex/UseContext';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const dateTime = new Date().toLocaleString();


    const { data: sellers = [], isLoading } = useQuery({
        queryKey: ['sellers', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/verifiedEmail?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })








    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const product_name = form.product_name.value;
        const seller_name = form.seller_name.value;
        const email = form.email.value;
        const verification = form.verification.value;
        const brand = form.brand.value;
        const age = form.age.value;
        const purchase_Price = form.purchase_Price.value;
        const sell_price = form.sell_price.value;
        const address = form.address.value;
        const phone = form.number.value;

        const image = form.image.files[0]

        const formData = new FormData()
        formData.append('image', image)
        const url = "https://api.imgbb.com/1/upload?expiration=600&key=f2c33e31b627f916630ff6b4299e8ca3"

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {

                const products = {
                    product_name,
                    sell_price,
                    seller_name,
                    email,
                    brand,
                    age,
                    purchase_Price,
                    address,
                    phone,
                    verification,
                    picture: imgData.data.display_url,
                    time: dateTime
                }

                fetch('http://localhost:5000/addProduct', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(products)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('product added successfully')
                        navigate('/dashboard/myProduct')
                        form.reset();
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })



            })
            .catch(error => {
                toast.error(error.message);
            })







    }





    return (
        <div className='mb-20'>
            <h1 className='text-primary text-2xl font-bold'> Add Products </h1>

            <div className="hero-content w-full">

                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body w-full lg:w-2/3 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Product Name</span>
                            </label>
                            <input type="text" required name='product_name' placeholder="Product Name" className="input input-sm input-bordered input-primary " />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" required name='seller_name' value={user?.displayName} disabled placeholder="seller Name" className="input input-sm input-bordered input-primary" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" required name='email' value={user?.email} disabled placeholder="Seller Email" className="input input-sm input-bordered input-primary" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Verification</span>
                            </label>
                            {
                                sellers?.map(seller =>
                                    seller?.verification? 
                                     <input type="verification" required name='verification' value={seller?.verification} disabled placeholder="Seller Email" className="input input-sm input-bordered input-primary" />
                                     :
                                     <input type="verification" required name='verification' value="unverified" disabled placeholder="Seller Email" className="input input-sm input-bordered input-primary" />
                                     
                                     )
                            }
                        </div>

                        {/* select brand start */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Select your Brand</span>

                            </label>
                            <select name='brand' className="select select-bordered border border-primary">

                                <option>tesla</option>
                                <option>audi</option>
                                <option>bmw</option>
                                <option>hyundai</option>
                                <option>mercedes</option>
                                <option>lamborghini</option>

                            </select>

                        </div>
                        {/* select brand end */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Uses Days</span>
                            </label>
                            <input type="number" required name='age' placeholder="Usage days" className="input input-sm input-bordered input-primary" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Purchase Price</span>
                            </label>
                            <input type="number" required name='purchase_Price' placeholder="Purchase Price" className="input input-sm input-bordered input-primary" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Selling Price</span>
                            </label>
                            <input type="number" required name='sell_price' placeholder="Selling Price" className="input input-sm input-bordered input-primary" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pick Up Address</span>
                            </label>
                            <input type="text" required name='address' placeholder="Pick Up Address" className="input input-sm input-bordered input-primary" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" required name='number' placeholder="Phone Number" className="input input-sm input-bordered input-primary" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Photo</span>
                            </label>
                            <input type="file" required name='image' placeholder="photo" className="input input-bordered shadow-lg" />
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddProduct;