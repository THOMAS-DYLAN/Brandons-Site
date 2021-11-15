import React, { useState } from "react";
import { ServiceList } from "../utils/const";
import { Link } from "react-router-dom";

const PriceCalc = () => {
  const [total, setTotal] = useState(0);
  return (
    <div className="calc-main">
      <div className="calc">
        <h1 className="total">{total}</h1>
      </div>
      <div className="calc-services">
        {ServiceList.map((item) => {
          const { service, price, id } = item;
          return (
            <div className="calc-service" key={id}>
              <div className="title-price">
                <h3 className="title">{service}</h3>
                <h4 className="price">${price}</h4>
                <button
                  className="add"
                  value={price}
                  onClick={() => {
                    setTotal((total) => total + price);
                    console.log(total);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceCalc;
