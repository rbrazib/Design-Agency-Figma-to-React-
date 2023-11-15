import React from 'react'

const FooterList = ({children,className}) => {
  return (
    <ul className={className}>{children}</ul>
  )
}

export default FooterList