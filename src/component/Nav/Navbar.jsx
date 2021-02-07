import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
 width: 100%;
 height: 5.5rem;
 border-bottom:0.2rem solid #f1f1f1;
 padding: 0 2rem;
 display: flex;
 justify-content: space-between;
 .logo{
  padding: 1.5rem 0;
 }

`
const Navbar = () => {
  return (
   <Nav>
    <div className="logo"> 
       NAVBAR
    </div>
    <Burger/>
    </Nav>
  )
}

export default Navbar
