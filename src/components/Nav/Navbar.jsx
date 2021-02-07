import React, {useState} from 'react'
import logo from '../../images/logo.png'
import Footer from './Footer'
const Navbar = () => {
 const [open, setOpen] = useState(false)
  return (
   <>
    <nav>
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <ul className="nav-links" style={{transform: open ? "translateX(0rem)" : ""}}>
       <li> <a>Home</a></li>
       <li> <a>About Us</a></li>
       <li> <a>Project</a></li>
       <li> <a>Sign In</a></li>
       <li> <a>Sign Up</a></li>
      </ul>
      <i onClick ={()=>setOpen(!open)} className="fas fa-bars burger"></i>
    </nav>
    <Footer/>
    </>
  )
}

export default Navbar
