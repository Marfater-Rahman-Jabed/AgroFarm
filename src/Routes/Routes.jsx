import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

import MainLayout from "../Layout/MainLayout/MainLayout";
import Abouts from "../Pages/Abouts/Abouts";
import Contacts from "../Pages/Contacts/Contacts";
import Blogs from "../Pages/Blogs/Blogs";
import ProductsVegetable from "../Pages/ProductsVegetable/ProductsVegetable";
import ProductsGrainOil from "../Pages/ProductsGrainOil/ProductsGrainOil";
import ProductsFish from "../Pages/ProductsFish/ProductsFish";
import ProductsFruit from "../Pages/ProductsFruit/ProductsFruit";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import AllMember from "../Pages/AllMember/AllMember";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <Abouts></Abouts>
            },
            {
                path: '/contact',
                element: <Contacts></Contacts>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/blogDetails/:id',
                element: <BlogDetails></BlogDetails>
            },
            {
                path: '/ProductsVegetable',
                element: <ProductsVegetable></ProductsVegetable>
                // loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/ProductsGrain',
                element: <ProductsGrainOil></ProductsGrainOil>

            },
            {
                path: '/ProductsFish',
                element: <ProductsFish></ProductsFish>

            },
            {
                path: '/productsFruits',
                element: <ProductsFruit></ProductsFruit>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allMember',
                element: <AllMember></AllMember>
            },
        ]
    }

])