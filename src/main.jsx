import React from 'react'
import ReactDOM from 'react-dom/client'
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
import ErrorPage from './pages/ErrorPage.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import ViewSpot from './pages/ViewSpot.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addSpot",
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: '/spots',
        element: <TouristsSpot></TouristsSpot>,
        loader: () => fetch('http://localhost:3000/spot')
      },
      {
        path: '/view/:_id',
        element: <ViewSpot></ViewSpot>,
        loader:()=> fetch(`http://localhost:3000/spot`)
      },
      {
        path: '/users',
        element: <UsersList></UsersList>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/navbar',
        element: <Navbar></Navbar>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

