import React from 'react'
import './Dashboard.css'
import Feed from './Feed'
import Sidebar from './Sidebar/Sidebar'

export default function Dashboard() {

  return (
    <div id='dashboard-container'>
      <div className='feed-container'>
        <Feed />
      </div>
      <div className='dashboard-sidebar-container'>
          <Sidebar />

      </div>
    </div>
  )
}
