import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Component/DashBoard/AddProduct";
import AllBuyer from "../Component/DashBoard/AllBuyer";
import AllSeller from "../Component/DashBoard/AllSeller";
import MyOrders from "../Component/DashBoard/MyOrders";
import MyProducts from "../Component/DashBoard/MyProducts";
import Footer from "../Component/Footer/Footer";
import Audi from "../Component/Home/AllCars/Audi";
import Bmw from "../Component/Home/AllCars/Bmw";
import Hyundai from "../Component/Home/AllCars/Hyundai";
import Lamborghini from "../Component/Home/AllCars/Lamborghini";
import Mercedes from "../Component/Home/AllCars/Mercedes";
import Tesla from "../Component/Home/AllCars/Tesla";
import MainHome from "../Component/Home/MainHome";
import Login from "../Component/Login";
import Navbar from "../Component/Navbar/Navbar";
import Register from "../Component/Register";
import PrivateRoute from "../Component/Shared/PrivateRoute";
import DashboardMain from "../Layout/DashboardMain";
import Main from "../Layout/Main";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<MainHome></MainHome>
            },
            {
                path:'/navbar',
                element:<Navbar></Navbar>
            },
            {
                path:'/footer',
                element:<Footer></Footer>
            },
            {
                path:'/tesla',
                element:<PrivateRoute><Tesla></Tesla></PrivateRoute>
            },
            {
                path:'/audi',
                element:<PrivateRoute><Audi></Audi></PrivateRoute>
            },
            {
                path:'/bmw',
                element:<PrivateRoute><Bmw></Bmw></PrivateRoute>
            },
            {
                path:'/hyundai',
                element:<PrivateRoute><Hyundai></Hyundai></PrivateRoute>
            },
            {
                path:'/mercedes',
                element:<PrivateRoute><Mercedes></Mercedes></PrivateRoute>
            },
            {
                path:'/lamborghini',
                element:<PrivateRoute><Lamborghini></Lamborghini></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardMain/></PrivateRoute>,
        children:[
          
            {
                path:'/dashboard/allSeller',
                element:<AllSeller/>
            },
            {
                path:'/dashboard/allBuyers',
                element:<AllBuyer/>
            },
            {
                path:'/dashboard/addProduct',
                element:<AddProduct/>
            },
            {
                path:'/dashboard',
                element:<MyOrders/>
            },
            {
                path:'/dashboard/myProduct',
              
                element:<MyProducts/>
            },
            
        ]
    }

])