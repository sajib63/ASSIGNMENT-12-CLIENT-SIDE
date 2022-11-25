import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../Assets/animation/login.gif'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           <img src={loginImage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form className="card-body">
                <h1 className="text-2xl text-center text-primary font-semibold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Login" />
              </div>
            </form>

           <div className=' text-center'>
           <button className='btn btn-primary my-2 w-80'>Google LogIn</button>
           <p className='my-2'>New To Car-Reseller <Link to='/register' className='text-primary'>Register</Link></p>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Login;