import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

import MainLayout from "../Layout/MainLayout/MainLayout";
import Abouts from "../Pages/Abouts/Abouts";
import Contacts from "../Pages/Contacts/Contacts";
import Blogs from "../Pages/Blogs/Blogs";
import ProductsVegetable from "../Pages/ProductsVegetable/ProductsVegetable";
import AddItem from "../Pages/AddItem/AddItem";

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
                path: '/addItem',
                element: <AddItem></AddItem>
            },
        ]
    }

])