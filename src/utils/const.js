import React from "react"
import Home from "../Pages/Home"
import Media from "../Pages/Media"
import Services from "../Pages/Services"
import About from "../Pages/About"
import PriceCalc from "../Pages/PriceCalc"

export const ServiceList = [
  {
    service: "service 1",
    id: 1,
    description: "The first service.",
    price: "50.00"
  },
  {
    service: "service 2",
    id: 2,
    description: "The second service.",
    price: "15.00"
  },
  {
    service: "service 3",
    id: 3,
    description: "The third service.",
    price: "10.00"
  },
  {
    service: "service 4",
    id: 4,
    description: "The fourth service.",
    price: "5.00"
  },
  {
    service: "service 5",
    id: 5,
    description: "The fifth service.",
    price: "3.50"
  },
  {
    service: "service 6",
    id: 6,
    description: "The sixth service.",
    price: "12.50"
  }
]

export const pages = [
  {
    id: 1,
    path: "/",
    text: "Home",
    pageName: <Home/>
  },
  {
    id: 2,
    path:"/about",
    text: "About",
    pageName: <About/>
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
    pageName: <Services/>
  },
  {
    id: 4,
    path: "/media",
    text: "Gallery",
    pageName: <Media/>
  }
]

export const contact = [
  {

  },
  {

  }
]