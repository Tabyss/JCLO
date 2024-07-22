import React from 'react'
import './home.scss'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Product from './components/Product'
import Sample from './components/Sample'

function Home() {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Product/>
        <Sample/>
    </>
  )
}

export default Home