import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Error from '../ErrorPage/Error';
import Home from '../Pages/Home/Home';
import Login from '../Authentic/Login/Login';
import Rejister from '../Authentic/Rejister/Rejister';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/rejister",
                element: <Rejister></Rejister>
            }
        ]
    }
])
export default Routes;