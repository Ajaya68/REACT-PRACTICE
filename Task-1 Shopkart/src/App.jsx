// import React from 'react'

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  let bName = "Shopkart";
  
  return (
    <>
      <Navbar bName={bName}/>
      <ProductList/>
      <Footer></Footer>
    </>
  )
}

export default App
