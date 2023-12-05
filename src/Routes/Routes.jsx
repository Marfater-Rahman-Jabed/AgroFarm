import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

import MainLayout from "../Layout/MainLayout/MainLayout";
import Abouts from "../Pages/Abouts/Abouts";
import Contacts from "../Pages/Contacts/Contacts";
import Blogs from "../Pages/Blogs/Blogs";
import ProductsVegetable from "../Pages/ProductsVegetable/ProductsVegetable";
import AddItem from "../Pages/AddItem/AddItem";
import ProductsGrainOil from "../Pages/ProductsGrainOil/ProductsGrainOil";
import ProductsFish from "../Pages/ProductsFish/ProductsFish";
import ProductsFruit from "../Pages/ProductsFruit/ProductsFruit";

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
                path: '/ProductsVegetable',
                element: <ProductsVegetable></ProductsVegetable>
                // loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/ProductsGrain',
                element: <ProductsGrainOil></ProductsGrainOil>
                // loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/ProductsFish',
                element: <ProductsFish></ProductsFish>
                // loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/productsFruits',
                element: <ProductsFruit></ProductsFruit>
                // loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/addItem',
                element: <AddItem></AddItem>
            },
        ]
    }

])