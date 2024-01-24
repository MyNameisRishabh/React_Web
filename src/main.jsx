import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home.jsx'
import { About } from './Pages/About/About.jsx'
import { Shop } from './Pages/Shop/Shop.jsx'
import { Contact } from './Pages/Contact/Contact.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Nav } from './Components/Nav/Nav.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'
import { store } from './Redux/Store/store.js'
import { ProductDetail } from './Components/ProductDetail/ProductDetail.jsx'
import { Cart } from './Components/Cart/Cart.jsx'
import { Error } from './Components/Error/Error.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Auth0Provider
  domain="dev-mxl6rea6h4x4xdwy.us.auth0.com"
  clientId="zxQRvG5aQowDsBITY1lg6xBtb145Yijt"
  authorizationParams={{redirect_uri: window.location.origin}}>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/detail' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    
 </Auth0Provider>
 </Provider>

  
)
