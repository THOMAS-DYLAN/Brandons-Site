import React, { useState } from 'react'

const PriceCalc = () => {
  const [price, setPrice] = useState(0)
  return (
    <div className="calc-main">
      {alert("This is not a cart. This calculates how much it will cost for your services. You pay in person.")};
      <div className="calc">
        <h1 classNAme = "price">{price}</h1>
      </div>
      <div className="calc-services">
        slkjdaf
      </div>
    </div>
  )
}

export default PriceCalc