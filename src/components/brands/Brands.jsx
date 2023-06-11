import React from 'react'
import "./Brands.css";
import Log1 from "../../Assest/log1.png"
import Log2 from "../../Assest/log2.png"
import Log3 from "../../Assest/log3.png"
import Log4 from "../../Assest/log4.png"
import Log5 from "../../Assest/log5.png"

const Brands = () => {
  return (
      <div className='brands'>
          <div className='brand__container container'>
              <div className='brand__container-img'>
                  <img src={Log1} alt='logo' />  
                  <img src={Log2} alt='logo' />  
                  <img src={Log3} alt='logo' />  
                  <img src={Log4} alt='logo' />  
                  <img src={Log5} alt='logo' />  
                </div>
           </div>
    </div>
  )
}

export default Brands