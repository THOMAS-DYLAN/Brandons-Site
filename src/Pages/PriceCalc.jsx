import React, { useState } from 'react';
import {ServiceList} from "../utils/const";
import {Link} from "react-router-dom"


const PriceCalc = () => {
  const [price, setPrice] = useState(0);
  return (
    <div className="calc-main">
      <div className="calc">
        <h1 classNAme="price">{price}</h1>
      </div>
      <div className="calc-services">
        {ServiceList.map((item) => {
          const { service, description, price } = item;
          return (
            <div className="calc-service">
              <div className="title-price">
                <h3 className="title">{service}</h3>
                <h4 className="price">${price}</h4>
                <p className="description">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceCalc;
