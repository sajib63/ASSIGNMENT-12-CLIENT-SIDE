import React from 'react';
import { Link } from 'react-router-dom';
import register from '../Assets/animation/register.gif'

const Register = () => {

    const registerSubmit = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const position = form.select.value;
        const password = form.password.value;
        console.log(name, email, password,position, photo);

    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={register} alt="" />
                </div>
                <form onSubmit={registerSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <div className="card-body">
                        <h1 className="text-2xl text-center text-primary font-semibold">Register</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="file" name='photo' placeholder="photo" className="input input-bordered" required />
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Select your position</span>
                             
                            </label>
                            <select name='select' className="select select-bordered">
                                <option>Seller</option>
                                <option>Buyer</option>
                               
                            </select>
                           
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>


                        <input type="submit" value="Register" className='btn btn-primary mt-5' />

                    </div>

                    <div className='my-5 text-center'>
                        <p>Already have an account Please  <Link to='/login' className='text-primary'>Login</Link>.</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;