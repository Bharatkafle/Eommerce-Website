import React from 'react'
import Input from "../components/InputBox/Input"
import Polygin from "../../src/components/polygon/Polygon"
import { Link } from 'react-router-dom'
import "./header.css" 
import { MdAccountCircle } from 'react-icons/md';
import { BsFillCartFill } from 'react-icons/bs';
import Categories from "../components/CategoriesSection/CategoriesSection"

const Header = () => {
  return (
    <div className='header' >
      <div  className='header-section container'>
        <div className='header-section__input'>
             <Input/>
        </div>
        <div className='logo'>
          <Polygin/>
          <Link to="/"><h2>Coral</h2></Link>
          <Polygin/>
        </div>
        <div className='header-section__right'>
          <div className='header-section__right-account'>
        <Link to="/account" > 
             <MdAccountCircle/>
              Account</Link>
          </div>
          <div className='header-section__right-shoping'>
            <Link to="/cart">
              <BsFillCartFill/>
            shopping  
               </Link>
          </div>
         </div>
      </div>
       <Categories></Categories>
    </div>
  )
}

export default Header