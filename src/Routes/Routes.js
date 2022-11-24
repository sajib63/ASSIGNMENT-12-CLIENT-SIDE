import { createBrowserRouter } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Audi from "../Component/Home/AllCars/Audi";
import Bmw from "../Component/Home/AllCars/Bmw";
import Hyundai from "../Component/Home/AllCars/Hyundai";
import Lamborghini from "../Component/Home/AllCars/Lamborghini";
import Mercedes from "../Component/Home/AllCars/Mercedes";
import Tesla from "../Component/Home/AllCars/Tesla";
import MainHome from "../Component/Home/MainHome";
import Navbar from "../Component/Navbar/Navbar";
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
            }
        ]
    }
])