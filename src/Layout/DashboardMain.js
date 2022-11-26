import React from 'react';
import { Link, Outlet } from 'react-router-dom';


import Navbar from '../Component/Navbar/Navbar';

const DashboardMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet />
                   

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/allSeller'>All Seller</Link></li>
                        <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>

                        <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/myProduct'>My Products</Link></li>


                        {/* {
                    isAdmin && <> 
                       <li><Link to='/dashboard/allUser'>All User</Link></li>
                       <li><Link to='/dashboard/addDoctors'>Add Doctors</Link></li>
                       <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                    
                    </>
                 } */}


                    </ul>

                </div>
            </div>
          
        </div>
    );
};

export default DashboardMain;