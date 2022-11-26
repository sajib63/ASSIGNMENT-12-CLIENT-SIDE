import React from 'react';

const AddProduct = () => {

    const dateTime = new Date().toLocaleString();
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const product_name = form.product_name.value;
        const seller_name = form.seller_name.value;
        const email = form.email.value;
        const brand = form.brand.value;
        const age = form.age.value;
        const purchase_Price = form.purchase_Price.value;
        const sell_price = form.sell_price.value;
        const address = form.address.value;
        const number = form.number.value;
        const picture = form.image.files[0]

        const data = {
            product_name,
            sell_price,
            seller_name,
            email,
            brand,
            age,
            purchase_Price,
            address,
            number,
            picture,
            time: dateTime
        }

        console.log(data);



    }


    return (
        <div>
            <h1 className='text-primary text-2xl font-bold'> Add Products </h1>

            <div className="hero-content w-full">

                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body w-2/3 mx-auto">
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
                            <input type="text" required name='seller_name' placeholder="seller Name" className="input input-sm input-bordered input-primary" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" required name='email' placeholder="Seller Email" className="input input-sm input-bordered input-primary" />
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
                            <input type="number" required name='age' placeholder="Buyer Name" className="input input-sm input-bordered input-primary" />
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
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddProduct;