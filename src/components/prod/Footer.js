import React from 'react'
import "./Footer.css"
import ss from "../assets/ss.png" ;
import er from "./logo footer.png";
import { FaFacebook,FaInstagram,FaLinkedin,FaTiktok } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {CgProfile} from'react-icons/cg'

function Footer() {
  return (
    <div className="footer">
          

          <span className='n'>    
            <nav className="navbar px-4 ">
  <div class="container-fluid">
    <a class="navbar-brand" ><span className='j'>CASA</span></a>
    <span class="d-flexi" role="search">
        <a href="https://www.facebook.com/profile.php?id=100091313651752"><FaFacebook size={"3rem"} /></a>
        <a href="https://www.instagram.com/casa.world.wide/"><FaInstagram size={"3rem"} /></a>
        <a href="https://www.linkedin.com/company/casa-tn/"><FaLinkedin size={"3rem"} /></a>
        <a href="https://www.tiktok.com/@casa.tn"><FaTiktok size={"3rem"} id='z' /></a>
    </span>
  </div>
  
</nav>
</span>

    

 <hr className='ff'></hr>
    <div cLassName="sb__footer section__padding">
      <span className='nkkk'>
     <div className="sb__footer-links">
         <div cLassName= "sb__footer-links_div">
             <p className='op'>A PROPOS</p>
           <p className='om'><span>CASA </span> est une startup<br /> tunisienne fondeé
           en <br /> 2023 par des jeunes <br />entrepreneurs.<br /> Son but principal est <br />
            créer des solutions<br /> pour les sans domicile<br />
           fixe (sdfs) a travers un <br /> platforme </p>
         </div>
    
  {/*<div cLassName= "sb__footer-links_div">
                            <span className='nkk'><p className='nk'> Faire Aux <br />Questions(FAQ)</p>
            
            
                 <p>Politique de <br />Confidentalité</p>
                 </span>
                 
 

         </div>
         <div cLassName= "sb__footer-links_div">
             <p className='op'> COMMENT DEVENIR<br /> UN CASATIEN ?</p>
                <p>Vous souhaitez devenir <br />un membre de la famille <br /><span>CASA </span>? </p>
               
            
            
         </div>
         <div className="sb__footer-links_div">
        
  </div>*/}
    <div className="socialmedia">
    <p className='op' id='m'>CONTACT</p>
    <span className='aaaa'>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQhfNfDVhxgcWcFPtdcPSwCGfnZJfBkXpgMJFclXJdcWkgjFgGZffHtrhNGtPLgknxVHb"><AiOutlineMail size={"3.5rem"} /></a>
        <a href="tel:+21699932244"><BsFillTelephoneFill size={"3.5rem"} /></a>
        <a href="https://www.linkedin.com/company/casa-tn/"><FaLinkedin size={"3.5rem"} /></a>
        </span><br></br>
        <img src={er}  className='er' />
 </div>

    </div>
    </span>
    </div>
    <div className='water'>©️2023 CASA . Conçu par Khlaf Digital Solution</div>
    <div  >H4YX</div>
    
 </div>
  )
}

export default Footer
