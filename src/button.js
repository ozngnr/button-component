import React from 'react';

export default function Button(props) {
  const {
    color,
    disabled,
    disableShadow,
    label,
    size, 
    variant,
    startIcon,
    endIcon 
  } = props 

  let className = `btn ${variant} ${size} ${color} ${disableShadow && "no-shadow"}`

  return (
      <button disabled={disabled} className={className}>
        {startIcon && <span className="material-icons" style={{ marginRight: 10 + "px"}}>{startIcon}</span>}
        {label || "Default"}
        {endIcon && <span className="material-icons" style={{ marginLeft: 10 + "px"}}>{endIcon}</span>}
      </button>
  )
}

Button.defaultProps = {
  variant: "",
  size: "",
  color: "",
  disableShadow: ""
}
