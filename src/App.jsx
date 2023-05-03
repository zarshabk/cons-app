import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
    
   <Routes>
       
       <Route path='/'element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
       </Route>

       <Route path='/dashboard'element={<Dashboard/>}>

       </Route>

   </Routes>
    
    </>
  )
}

export default App