import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Error from '../ErrorPage/Error';
import Home from '../Pages/Home/Home';
import Login from '../Authentic/Login/Login';
import Rejister from '../Authentic/Rejister/Rejister';
import AddBook from '../Pages/AddBook/AddBook';
import Books from '../Pages/AllBook/Books';
import BorrowedBook from '../Pages/BorrowedBook/BorrowedBook';

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
                path: "/allBook",
                element: <Books></Books>
            },
            {
                path: "/addBook",
                element: <AddBook></AddBook>
            },
            {
                path: "/borrowedBook",
                element: <BorrowedBook></BorrowedBook>
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