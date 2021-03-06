import React from 'react';
import styled from 'styled-components';
import auth from './../Auth0'
import { Link } from 'react-router-dom'

const Nav = () => {
  
  if (!auth.isAuthenticated()) {
    return (
      <NavContainer id="VisitorNavContainer">
      <li><a href="#why">Why People</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#pricing">Pricing</a></li>
      {/* {auth.isAuthenticated() ? <li><a href="/home">DASHBOARD</a></li> : null} */}
    </NavContainer>
    )}

  if (auth.isAuthenticated()) {
      return (
      <NavContainer id="UserNavContainer">
      </NavContainer>
      )
    } 
}

export default Nav;

// styles

const NavContainer = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: space-around;
  padding: 0;

  li {
    a {
      font-size: 14px;
      text-decoration: none;
      padding-bottom: 10px;
      color: #525A65;


      &:hover {border-bottom: 1px solid black}
      &:hover {color: black}
      &:hover {
        text-shadow: -.25px -.25px 0 black, 
                      .25px .25px black;
      }

    }
  }

  //  @media (max-width: 400px) {
  //   flex-direction: column;
  //   text-align: center;
  //  height: 300px;
  //   height: 100%;
  //   margin: 0 auto;
  // }
}
`;
