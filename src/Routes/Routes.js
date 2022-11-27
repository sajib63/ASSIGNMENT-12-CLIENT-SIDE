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
                element:<Tesla></Tesla>
            },
            {
                path:'/audi',
                element:<Audi></Audi>
            },
            {
                path:'/bmw',
                element:<Bmw></Bmw>
            },
            {
                path:'/hyundai',
                element:<Hyundai></Hyundai>
            },
            {
                path:'/mercedes',
                element:<Mercedes></Mercedes>
            },
            {
                path:'/lamborghini',
                element:<Lamborghini></Lamborghini>
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
        element:<DashboardMain/>,
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