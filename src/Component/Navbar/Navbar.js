import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide } from 'react-icons/fa';
import { AuthContext } from '../../UserContex/UseContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const navItems = <>
        <li><Link to='/' className=' font-semibold  hover:bg-primary rounded hover:text-white '>Home</Link></li>
        <li><Link to='/' className=' font-semibold  hover:bg-primary rounded hover:text-white '>About</Link></li>
        <li><Link to='/' className=' font-semibold  hover:bg-primary rounded hover:text-white '>Product</Link></li>
        <li><Link to='/' className=' font-semibold  hover:bg-primary rounded hover:text-white '>Blog</Link></li>



    </>
    return (
        <div className="navbar  sticky bg-white top-0 z-50 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className=" font-semibold text-xl">
                    <div className='flex justify-center items-center gap-1'>
                        <p>Car</p> <span><FaCarSide className='text-primary'></FaCarSide></span><span className='text-primary'>Reseller</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user?.uid ? <>
                       
                       
                       <Link className='p-3 mx-2 font-semibold  bg-primary rounded text-white '>{user?.displayName}</Link>
                       
                        <Link onClick={logout} className='p-3  font-semibold bg-primary rounded text-white '>Logout</Link>
                    </>
                        :
                        <>

                            <Link to='/login' className='p-3 mx-4 font-semibold  bg-primary rounded text-white '>Login</Link>
                        </>
                }







            </div>
        </div>
    );
};

export default Navbar;