import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Entries from './Components/Entries/Entries.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import Register from './Components/SignUp/Register/Register.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='entries' element={<Entries/>}/>
      <Route path='api/register' element={<Register/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
