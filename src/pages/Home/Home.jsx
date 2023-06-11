import React from 'react'
import "./Home.css"
import { Outlet } from 'react-router-dom'
import Collections from '../../components/Collections/Collections'
import Brands from '../../components/brands/Brands'


const Home = () => {
  return (
    <div >
      <Outlet />
      <Collections />
      <Brands/>
      
      
      
    </div>
  )
}

export default Home