import React from 'react';
import "../Button/button.css"

function Button(props) {
  return (
    <button className='fromButton' type='submit'>
    {props.label}
      
    </button>
  )
}

export default Button
