
import React from 'react'
import PolygonImg from "../../Assest/Polygonimg1.png"
import "./Polygon.css"

const Polygon = () => {
  return (
    <div className='polygon' >
      <div className='polygon__Container mb-1'>
        <div className=' polygonImg polygon__Container-imgone' >
            <img src={PolygonImg} />
        </div>
        <div className='  polygonImg polygon__Container-imgtwo' >
            <img src={PolygonImg}  />
        </div>
        <div className='  polygonImg polygon__Container-imgthree' >
            <img src={PolygonImg} />
         </div>
     </div>
    </div>
  )
}

export default Polygon