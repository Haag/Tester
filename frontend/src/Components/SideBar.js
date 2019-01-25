import React, {Component} from 'react'
import styled from 'styled-components'


function openNav() {
  document.getElementById("mySidenav").style.width = "25%";
  document.getElementById("mySidenav").style.marginTop = "80px";
  document.getElementById("main").style.marginLeft = "25%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


const NewComponent = () => {

return (

  <SideBarContainer id="SideBarContainer">
    <Sidenav id="mySidenav" className="sidenav">
      <a
        className="closebtn"
        onClick={closeNav}
        >
        ×
      </a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </Sidenav>
    <Main id="main">
      <h2>Sidenav Push Example</h2>
      <p>
        Click on the element below to open the side navigation menu, and
        push this content to the right.
      </p>
      <span
        style={{ fontSize: 30, cursor: "pointer" }}
        onClick={openNav}
        >
        ☰ open
      </span>
    </Main>

</SideBarContainer>
)
}



export default NewComponent

  const SideBarContainer = styled.div`
  font-family: "Lato";
  sans-serif;
  `
  
  const Sidenav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #525A65;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 10px;

   a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  
  // .sidenav a:hover {
  //   color: #f1f1f1;}
  // .sidenav .closebtn {
  //   position: absolute;
  //   top: 0;
  //   right: 25px;
  //   font-size: 36px;
  //   margin-left: 50px;}
    `
  const Main = styled.div` {
    transition: margin-left .5s;
    padding: 16px;}
    `
  // @media screen and (max-height: 450px) {
  // .sidenav {padding-top: 15px;} 
  // .sidenav a {font-size: 18px;}'
  


