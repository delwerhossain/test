import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider
 } from 'react-router-dom'
import './index.css'
import Router from './Layouts/MainLayout'
import AuthProvider from './Auth/Provider/AuthProvider'
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
  <AuthProvider>
   <RouterProvider router={Router} />
   </AuthProvider>
  </HelmetProvider>
  </React.StrictMode>
)
