import React from 'react'
import './style.scss' 

const Icon = ({ className, icon, type }) => (
  <i className={`icon ${className} ${type} fa-${icon}`}></i>
)

Icon.defaultProps = {
  className: '', 
  type: 'far'
}

export default Icon
