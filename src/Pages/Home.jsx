import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className = "home-main">
      <h1>Company Name</h1>
      <button className = "home-abt"><Link className = "home-abt" to = "/about">About Us</Link></button>
    </div>
  )
}

export default Home;
