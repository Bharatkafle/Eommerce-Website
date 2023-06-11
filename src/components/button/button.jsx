import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

const button = ({name, icons, Shopnow}) => {
  return (
      <div>
      <Link to={Shopnow}><button>{icons}{  name}</button></Link>
    </div>
  )
}

export default button