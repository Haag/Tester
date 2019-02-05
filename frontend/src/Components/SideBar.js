import React, {Component} from 'react'
import styled from 'styled-components'
import HomeLanding from './Home/HomeLanding';


class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
    this.closeSide = this.closeSide.bind(this)
    this.openSide = this.openSide.bind(this)
  }

  openSide() {
  this.setState({
      isOpen: true
    })
    document.getElementById("mySidenav").style.width = "20%"
    document.getElementById("mySidenav").style.marginTop = "60px"
    document.getElementById("main").style.marginLeft = "20%"
  }

  closeSide() {
   this.setState({
      isOpen: false
    })
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  

  render(){
    return (
      <SideBarContainer id="SideBarContainer">
        
        <HomeLanding openSide={this.openSide} closeSide={this.closeSide} isOpen={this.state.isOpen}/>
        
        <Sidenav id="mySidenav" className="sidenav">
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
        </Main>
    </SideBarContainer>
)
}
}


export default SideBar

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
  


