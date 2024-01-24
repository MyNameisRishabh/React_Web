import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Nav } from './Components/Nav/Nav.jsx'
import { Home } from './Pages/Home/Home.jsx'
import { Feature } from './Components/Features/Feature.jsx'
import { Product } from './Components/Product/Product.jsx'
import { Hero } from './Components/Hero/Hero.jsx'
import { About } from './Pages/About/About.jsx'

function App() {

  return (
    <>
    <Home/>
    <Feature/>
    <Product/>
    <Hero/>
    <About/>
    </>
  )
}

export default App
