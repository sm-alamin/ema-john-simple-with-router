import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import Inventory from './components/Inventory/Inventory';
import cartProductsLoader from './loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children:[
      {
        path: "/",
        element: <Shop />
      },
      {
        path: "orders",
        element: <Orders />,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: <Inventory />
      },
      {
        path: "login",
        element: <Login />
      },

    ]
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
