import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from '../../components/Pages/Home'
import About from '../../components/Pages/About'
import Project from '../../components/Pages/Project'
import SignIn from '../../components/Pages/SignIn'
import SignUp from '../../components/Pages/SignUp'
import logo from '../../images/logo.png'
import Footer from './Footer'
import './Styles.css'
const Navbar = () => {
 const [open, setOpen] = useState(false)
  return (
   <>
   <Router>
    <nav>
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <ul className="nav-links" style={{transform: open ? "translateX(0rem)" : ""}}>
      <li ><Link to={'/'} className="nav_links">Home</Link></li>
      <li><Link to={'/about'} className="nav_links">About</Link></li>
      <li><Link to={'/project'} className="nav_links">Project</Link></li>
      <li><Link to={'/login'} className="nav_links">SignIn</Link></li>
      <li><Link to={'/register'} className="nav_links register">SignUp</Link></li>
      </ul>
      <i onClick ={()=>setOpen(!open)} className="fas fa-bars burger"></i>
    </nav>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/about' component={About}/>
      <Route path='/project' component={Project}/>
      <Route  path='/login' component={SignIn}/>
      <Route path='/register' component={SignUp}/>
    </Switch>
    </Router>
    <Footer/>
    </>
  )
}

export default Navbar
