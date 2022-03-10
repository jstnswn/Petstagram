import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFeedPosts } from '../../store/dashboard'
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
