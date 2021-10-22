import React, { useState } from 'react';
import {ServiceList} from "../utils/const"
import {Link} from "react-router-dom"

const Services = () => {
  return (
    <div calssName = "service-main">
      <h1 className="service-title">Serivces</h1>
      <div className="services">
        {ServiceList.map((item) => {
          const {service, description, price} = item;
          return <div className="service">
            <h1 className="title">{service}</h1>
            <div className="info">
              <p className="desc">{description}</p>
              <h3 classNAme = "price">{price}</h3>
            </div>
            <Link to = "/cart"><button className="go">Go To Calc</button></Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
