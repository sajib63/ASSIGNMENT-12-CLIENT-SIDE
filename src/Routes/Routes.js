import { createBrowserRouter } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import MainHome from "../Component/Home/MainHome";
import Tesla from "../Component/Home/Tesla";
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
            }
        ]
    }
])