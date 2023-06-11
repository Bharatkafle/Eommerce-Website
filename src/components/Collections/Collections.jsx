import React from 'react'
import "./Collection.css"

import GirlImg from "../../Assest/girl.jpg";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import  Button  from '../../components/button/button';

const Collections = () => {
  return (
      <div className='collection  pr-0' >
          <div className='collection__Container container   ' >
             
        <div className='row' >
        <div className=' col-md-8 col-sm-12 d-flex align-items-center custompadding flex-row  ' > 
            <div className='collection__Container_desc  '>
            <h2>Collections</h2>
            <p>You can Explore Ans Shop  Many Different Collection From  Various  Barand Here</p>
              <Button Shopnow="/shopnow" icons={<AiOutlineShoppingCart/>} name="shop Now" />
            </div>
              </div>
          <div className='col-md-2 collection__Container-img col-sm-12 d-flex justify-content-end ' > 
                        <div className='triangle'>
              
                        </div>
                  <img src={GirlImg} className='img-fluid' /> 
               </div>
              </div>
             </div>
           </div>
    
  )
}

export default Collections