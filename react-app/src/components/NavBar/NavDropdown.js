import React from 'react'
import LogoutButton from '../auth/LogoutButton'

export default function NavDropdown() {
  return (
    <ul className='nav-dropdown'>
      <li>
        <LogoutButton />
      </li>
    </ul>
  )
}
