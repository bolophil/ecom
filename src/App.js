
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import React from 'react';
import Contact from './component/Contact';
import About from './component/About';
import Signup from './component/buttons/Signup';
import Login from './component/buttons/Login';
import Checkout from './component/Checkout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
      <Navbar/>
      <Routes>
        <Route exact path="/ecom" element={<Home/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
      </Routes>  
      
   </>
  );
}

export default App; 
