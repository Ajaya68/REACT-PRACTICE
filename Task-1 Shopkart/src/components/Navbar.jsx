// import React from 'react'

function Navbar({bName}) {
  return (
    <div className="navbar">
      <a href="#" className="brand-title"><h1>{bName}</h1></a>
      <nav><a href="#">Cart</a></nav>
    </div>
  )
}

export default Navbar
