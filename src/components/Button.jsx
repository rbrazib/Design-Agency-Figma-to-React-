import React from 'react'
import { NavLink } from "react-router-dom";
const Button = ({btnName,className,href}) => {
  return (
    <div>
       <NavLink to={href}>
            <button className={className}>{btnName}</button>
        </NavLink>
    </div>
  )
}

export default Button