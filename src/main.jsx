import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from './Layout/Root';
import Home from './components/Home/Home';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './provider/AuthProvider';
import AllJobs from './components/AllJobs/AllJobs';
import PrivateRoute from './Routes/PrivateRoute';
import MyJobs from './components/MyJobs/MyJobs';
import AddJobs from './components/AddJobs/AddJobs';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import UpdateJobs from './components/UpdateJobs/UpdateJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blogs from './components/Blogs/Blogs';
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
        
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>

      },
      {
        path:"/job/:id",
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)


      },
      {
        path:"/update/:id",
        element:<PrivateRoute><UpdateJobs></UpdateJobs></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)


      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/all",
        element:<AllJobs></AllJobs>
      },
      {
        path:'/my',
        element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path:'/add',
        element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path:"/resumeBuilder",
        element:<PrivateRoute><ResumeBuilder></ResumeBuilder></PrivateRoute>,
      },
      {
        path:'/applied',
        element:<PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
      }
     
      
     
      
      
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
