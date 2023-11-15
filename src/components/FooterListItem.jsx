import React from 'react'
import { NavLink } from "react-router-dom";
const FooterListItem = ({className,href,listName}) => {
  return (
    <li>
    <NavLink className={className} to={href}>{listName}</NavLink>
   </li>
  )
}

export default FooterListItem