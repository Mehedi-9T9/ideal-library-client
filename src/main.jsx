import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Components/Routes/Routes.jsx'
import AuthProvider from './Components/Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthProvider>


  </React.StrictMode>,
)
