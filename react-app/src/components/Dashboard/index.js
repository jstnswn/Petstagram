import React from 'react'
import './Dashboard.css'
import Feed from './Feed'

export default function Dashboard() {

  return (
    <div id='dashboard-container'>
      <div className='feed-container'>
        <Feed />
      </div>
    </div>
  )
}
