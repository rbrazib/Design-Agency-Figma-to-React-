import React from 'react'
import { NavLink } from "react-router-dom";
const ListItem = ({listName,href,className}) => {
  return (
   <li>
    <NavLink className={className} to={href}>{listName}</NavLink>
   </li>
  )
}

export default ListItem