import React, { useState } from 'react'

const Model = ({modelOff}) => {
  return (
    <div className="container model">
      <h1 className="warning">WARNING!</h1>
      <h2>This is NOT a cart. This is a price calculator.<br/>
      This means it gives you your total, but you cannot pay.</h2>
      <button className="close" onClick={modelOff}>Close</button>
    </div>
  )
}

export default Model;
