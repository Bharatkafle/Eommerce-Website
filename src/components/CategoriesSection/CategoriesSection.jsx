import React from 'react'
import { Link } from 'react-router-dom';
import  categories from "../../Constants/CategoriesData"
const CategoriesSection = () => {
  return (
    <div className='container custompadding '>
      <div className='categories__container '>
        {categories.map((category, index) => {
          return (
            <li key={index} >
              <Link to={category.path} >{category.name }</Link>
            </li>
          )
        })
          
       }
        </div>
    </div>
  )
}

export default CategoriesSection;