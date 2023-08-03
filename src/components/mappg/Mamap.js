import React from 'react'
import "./Mamap.css"
import Logo from "../assets/image 36.png";

function Mamap ()  {
  return (
    <div class="mapp">
        <div className='tit'>LOCALISATION DES SDF</div>
        <img src={Logo} alt="Logo" className="imap" />
    </div>
  )
}

export default Mamap
