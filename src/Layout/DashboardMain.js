import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';


import Navbar from '../Component/Navbar/Navbar';
import { Loader } from '../Component/Shared/Loader';
import UseAdmin from '../Hooks/UseAdmin';
import UseSeller from '../Hooks/UseSeller';

import { AuthContext } from '../UserContex/UseContext';

const DashboardMain = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    const [seller] = UseSeller(user?.email)



    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet />


                </div>
                <div className="drawer-side bg-white">
                    <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        {
                            !isAdmin && <li><Link to='/dashboard'>My Orders</Link></li>
                        }


                        {
                            seller && !isAdmin && <>

                                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myProduct'>My Products</Link></li>

                            </>
                        }





                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allSeller'>All Seller</Link></li>
                                <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reportProduct'>Report Product</Link></li>

                            </>
                        }


                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardMain;