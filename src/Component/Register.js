import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import register from '../Assets/animation/register.gif'
import { AuthContext } from '../UserContex/UseContext';
import toast from 'react-hot-toast';
import UseToken from '../Hooks/UseToken';

const Register = () => {
    const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [userEmail, setUserEmail] = useState('');
    const [token] = UseToken(userEmail)

    if (token) {
        navigate(from, { replace: true });
    }

    const registerSubmit = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;

        const email = form.email.value;
        const position = form.select.value;
        const password = form.password.value;
        const image = form.image.files[0]


        const formData = new FormData()
        formData.append('image', image)
        const url = "https://api.imgbb.com/1/upload?expiration=600&key=f2c33e31b627f916630ff6b4299e8ca3"

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {

                const imageUrl = imageData.data.display_url
                createUser(email, password)
                    .then(result => {
                        updateUserProfile(name, imageUrl)
                        toast.success('successfully created user')
                        saveUser(imageUrl, name, email, position)
                        setUserEmail(email)
                        form.reset();

                    })
                    .catch(error => {
                        toast.error(error.message);
                    })


            })
            .catch(err => console.error(err))

    }


    const googleLoginUser = () => {
        googleLogin()
            .then(data => {

                setUserEmail(data.user.email)
                saveUser(data.user.photoURL
                    , data.user.displayName, data.user.email)
                 
                toast.success('successfully created user')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }


    const saveUser = (imageUrl, name, email, position) => {
        const user = {
            imageUrl, name, email, position
        };
        fetch('http://localhost:5000/position', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={register} className="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <form onSubmit={registerSubmit} className="card-body">
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
                            <input type="file" name='image' placeholder="photo" className="input input-bordered" required />
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Select your position</span>

                            </label>
                            <select name='select' className="select select-bordered">
                                <option>Buyer</option>
                                <option>Seller</option>

                            </select>

                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>


                        <input type="submit" value="Register" className='btn btn-primary mt-5' />

                    </form>
                    <div className=' text-center'>

                        <button onClick={googleLoginUser} className='btn btn-primary my-2 w-80'>Google LogIn</button>

                        <p className='my-2'>Already have an account Please  <Link to='/login' className='text-primary'>Login</Link>.</p>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Register;