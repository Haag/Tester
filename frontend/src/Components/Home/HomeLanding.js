import React from 'react';
import styled from 'styled-components';
import Nav from "../Nav";
import { Redirect } from 'react-router-dom'
// import NavBar from './NavBar'
import auth from '../../Auth0'

const HomeLanding = () => {

  function logout() {
    auth.signOut();
  }

  return (
    !auth.isAuthenticated() ? <Redirect to="/"/> : 
      (
        <Container id="Container" isLoggedIn>
          <AppName id="AppName" to="/">
            <h1>HomeLanding</h1>
          </AppName>
          <UsersNav id="UsersNav">
            {/* {window.location.pathname === '/' && <Nav id="Nav" isLoggedIn />} */}
            <Nav />
            <LinkStyled id="LinkStyled" type="button" onClick={logout}>
              Sign out
            </LinkStyled>
          </UsersNav>
        </Container>
      )
  );
};

export default HomeLanding;

// styles
const Container = styled.div`
  padding: 0 2%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 1500px;
  align-items: center;
  height: 55px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  background: darkgrey;

  // @media (max-width: 900px) {
  //   if (window.location.pathname === '/') {
  //     flex-direction: ${props => props.isLoggedIn ? 'column' : 'row'}
  //   } else if (window.location.pathname === '/dashboard') {
  //     flex-direction: ${props => props.isLoggedIn ? 'row' : 'column'}
  //   }
  //   height: 55px;
  // }
  
  // @media (max-width: 700px) {
  //   flex-direction: column;
  // }

  // }
  // @media (max-width: 400px) {
  //   height: 200px;
  // }
`;

const AppName = styled.div`
  align-self: center;

  h1 {
    font-family: 'Comfortaa', cursive;
    font-size: 26px;
    color: black;
    &:hover {color: white}
    &:hover {border-bottom: 1px solid black}
  }
`;


const LinkStyled = styled.button`
  font-size: 14px;
  height: 25px;
  width: 90px;
  cursor: pointer;
  border-radius: 3px;
  color: black;
  margin-left: 5%;
  background: none;
  border: 1px solid black;
  &:hover {color: white}
  &:hover {background: black}
  

  // @media (max-width: 400px) {
  //   margin: 0 0 15px 0;
  //   border: none;
  //   color: white;
  // }
`;

const VisitorsNav = styled.div`
align-items: baseline;
display: flex;
width: 60%;
// max-width: 50%;
justify-content: space-between;

// @media (max-width: 1000px) {
//   // max-width: 50%;
// }

// @media (max-width: 900px) {
//   // width: 100%;
//   // max-width: 100%;

//   }

//   @media (max-width: 400px) {
//     flex-direction: column;
//     height: 100%;
//     align-items: center;
//   }
`;

const UsersNav = styled(VisitorsNav)`
  justify-content: flex-end;
`;
