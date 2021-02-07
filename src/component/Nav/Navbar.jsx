import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import logo from '../../images/logo.png'

const Nav = styled.nav`
 width: 100%;
 height: 5.5rem;
 border-bottom:0.2rem solid #f1f1f1;
 padding: 0 2rem;
 display: flex;
 justify-content: space-between;
 

`
const Navbar = () => {
  return (
   <Nav>
    <div className="logo"> 
       <img src={logo} alt="logo"/>
    </div>
    <Burger/>
    </Nav>
  )
}

export default Navbar
