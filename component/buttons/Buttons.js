import React from 'react'

export  function Buttons({text,Style}) {
  return (
    <div>
        <button className="btn waves-effect waves-light" style={{ backgroundColor: Style }}>{text}</button>
    </div>
  )
}
