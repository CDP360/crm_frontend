import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar'

function Routered() {
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <div style={{width:'100%'}}>
        <Header/>
        <Outlet/>
        </div>
    </div>
  )
}

export default Routered