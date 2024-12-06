import React from 'react'
import Logo from '../Logo'
import SideNavBar from './SideNavBar'
import { Outlet } from 'react-router-dom'

function SideBar() {
  return (
    <div className='sidebar'>
        <Logo />
        <SideNavBar />
        <Outlet />

        <footer>
            <p>@ trademark devartist</p>
        </footer>       
    </div>
  )
}

export default SideBar