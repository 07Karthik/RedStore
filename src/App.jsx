import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Footer from './Components/Footer/Footer';
import Display from './Components/Display/Display';
import Cart from './Pages/Cart';
import Account from './Pages/Account';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/product" element={<Display/>}>
          <Route path=":id" element={<Display/>}/>
          </Route>
          
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </div>
    </>
  )
}

export default App
