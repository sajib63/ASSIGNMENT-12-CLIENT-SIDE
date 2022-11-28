import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import loginImage from '../Assets/animation/login.gif'

import { AuthContext } from '../UserContex/UseContext';
import toast from 'react-hot-toast';
import UseToken from '../Hooks/UseToken';

const Login = () => {
    const {loginUser,googleLogin}=useContext(AuthContext)
    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/";
    const [userEmail, setUserEmail]=useState('')
    const [token]=UseToken(userEmail);

    if(token){
      navigate('/')
    }

    const loginHandle=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        loginUser(email, password)
        .then(result=>{
        
           toast.success('successfully login user')
           setUserEmail(email)
           navigate(from, { replace: true });
           form.reset()
        })
        .catch(error=>{
            console.error(error);
        })


    }

    const googleLoginUser=()=>{
        googleLogin()
        .then(data=>{
          setUserEmail(data.user.email)
            toast.success('successfully created user')
            navigate(from, { replace: true });
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           <img src={loginImage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={loginHandle} className="card-body">
                <h1 className="text-2xl text-center text-primary font-semibold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Login" />
              </div>
            </form>

           <div className=' text-center'>
           <button onClick={googleLoginUser} className='btn btn-primary my-2 w-80'>Google LogIn</button>
           
           <p className='my-2'>New To Car-Reseller <Link to='/register' className='text-primary'>Register</Link></p>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Login;