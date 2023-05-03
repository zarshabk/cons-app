import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
         <div className='sidebar'>
              sidebar
         </div>
         <div className='main-dashboard'>
              <div className='dashboard-header'>
                 header
              </div>
              <div className='dashbaord-content'>
                    <Outlet/>
              </div>

              <div className='dashboard-footer'>
                    footer
              </div>

         </div>
    </div>
  )
}

export default Dashboard