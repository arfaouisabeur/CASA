import React from 'react'
import "./Navbar.css"
import {BsFillBasket3Fill} from'react-icons/bs'
import {CgProfile} from'react-icons/cg'
function Navbar ()  {
  return (
    <div className='era'>    <div class="nav">
      <input type="checkbox" id="nav-check"></input>
        
        <div class="nav-header">
          <div class="nav-title">
            CASA
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
            <ul>
            <li><a href="/CASA/#/" >accueil</a></li>
          <li><a   href="/CASA/#/map" >map</a></li>
          <li><a   href="/CASA/#/produit" >produit</a></li>
          <li><a   href="/CASA/#/contact" >contact</a></li>
          <a class="icon">
             <CgProfile size={"2.5rem"} className='ze' />
             <BsFillBasket3Fill size={"2.5rem"} className='ze' />
          </a>
          <li><button type="button" class="btn btn-primary btn-lg ">JOIN US</button></li>

            </ul>
        </div>
      </div>
      </div>

  )
}

export default Navbar
