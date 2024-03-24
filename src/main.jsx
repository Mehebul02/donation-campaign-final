import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './components/home/Home.jsx';
import Donation from './components/donation/Donation.jsx';
import Statistics from './components/statistics/Statistics.jsx';
const router = createBrowserRouter([
 {
  path:'/',
  element:<Root></Root>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/donation',
      element:<Donation></Donation>
    },
    {
      path:'/statistics',
      element:<Statistics></Statistics>
    }
  ]
 }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
