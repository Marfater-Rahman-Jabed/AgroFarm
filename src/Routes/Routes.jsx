import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

import MainLayout from "../Layout/MainLayout/MainLayout";
import Abouts from "../Pages/Abouts/Abouts";

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
        ]
    }

])