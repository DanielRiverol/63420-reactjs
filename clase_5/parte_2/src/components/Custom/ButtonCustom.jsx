import React from 'react'

function ButtonCustom({type ="button", className, children}) {
  return (
    <button className={className} type={type}>
        {children}
    </button>
  )
}

export default ButtonCustom