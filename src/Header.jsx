import React from 'react'
import { useSelector } from 'react-redux'
function Header() {
    const amount=useSelector((store)=>store.basket.amount)
  return (
    <div>
    <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <a className="navbar-brand" href="#">Basket <sup>{amount}</sup></a>
</nav>
</div>
  )
}

export default Header