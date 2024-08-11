import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import AddTouristsSpot from './pages/AddTouristsSpot.jsx';
import TouristsSpot from './pages/TouristsSpot.jsx';
import UsersList from './pages/UsersList.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Navbar from './shared/Navbar.jsx';
import Footer from './shared/Footer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
      },
      {
        path:"/addSpot",
        element:<AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path:'/spots',
        element:<TouristsSpot></TouristsSpot>
      },
      {
        path:'/users',
        element:<UsersList></UsersList>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/navbar',
        element:<Navbar></Navbar>
      },
      {
        path:'/footer',
        element:<Footer></Footer>
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
