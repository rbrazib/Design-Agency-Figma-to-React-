import React from 'react'

const Image = ({image}) => {
  return (
    <div>
        <img src={image} className="w-full" alt="Imag Not Found" />
    </div>
  )
}

export default Image