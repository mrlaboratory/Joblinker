import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Statistics from './components/Statistics'
import AppliedJobs from './components/AppliedJobs'
import Blog from './components/Blog'
import JobDetails from './components/JobDetails'

// const loadJobDetails = async (params)  => {
//   console.log(params)
//  const res = await fetch('jobdata.json')
//  const data = await res.json()
//  return data
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
    ]
  },
  {
    path: '/applied',
    element: <AppliedJobs></AppliedJobs>,
    loader: () => fetch('/jobdata.json')
  },
  {
    path:'/job/:id',
    element: <JobDetails></JobDetails>,
    loader: () => fetch('/jobdata.json')
  },
  {
    path: '/statistics',
    element: <Statistics></Statistics>
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <RouterProvider router={router}></RouterProvider>
  // </React.StrictMode>,
  <RouterProvider router={router}></RouterProvider>
)
