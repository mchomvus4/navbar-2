import React ,{useState} from 'react'
import styled from 'styled-components'
import RightNav from './RightNav';

const StyledBurger = styled.div`

 width: 2rem;
 height: 2rem;
 position: fixed;
 top: 1.5rem;
 right: 2rem;
 display: flex;
 justify-content: space-around;
 flex-flow: column nowrap;
 z-index: 20;
 display: none;
 @media screen and (max-width: 768px){
  display: flex;
 }

 div{
  width: 2rem;
  height: 0.25rem;
  border-radius: 1rem;
  background: ${({open})=> open ? '#ccc' : '#333'};
  transform-origin: 0.1rem;
  transition: all 0.3s linear; 
  &:nth-child(1){
  transform: ${({open })=> open ? 'rotate(45deg)' : 'rotate(0)'};
 }
  &:nth-child(2){
  transform: ${({open })=> open ? 'translateX(100%)' : 'translate(0)'};
   opacity: ${({open})=> open ? 0 : 1}
 }
  &:nth-child(3){
  transform: ${({open })=> open ? 'rotate(-45deg)' : 'rotate(0)'}
 }
 }
`;

const Burger = () => {
 const [open, setOpen] =  useState(false);
  return (
   <>
    <StyledBurger open ={open} onClick={()=> setOpen(!open)} >
      <div/>
      <div/>
      <div/>
    </StyledBurger>
     <RightNav open={open}/>
   </>
  )
}

export default Burger
