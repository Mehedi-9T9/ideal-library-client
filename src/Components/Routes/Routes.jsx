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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import BookDetails from '../Pages/AllBook/BookDetails';
import MyBook from '../Pages/MyBook/MyBook';
import UpdateBook from '../Pages/UpdateBook/UpdateBook';

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
                element: <PrivateRoute><Books></Books></PrivateRoute>
            },
            {
                path: "/addBook",
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path: "/borrowedBook",
                element: <PrivateRoute><BorrowedBook></BorrowedBook></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/rejister",
                element: <Rejister></Rejister>
            },
            {
                path: '/book/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>
                // loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: 'myBook',
                element: <PrivateRoute><MyBook></MyBook></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <UpdateBook></UpdateBook>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)
            }

        ]
    }
])
export default Routes;