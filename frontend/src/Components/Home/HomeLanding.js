import React from 'react'
import styled from 'styled-components'
import Nav from "../Nav"
import { Redirect } from 'react-router-dom'
import auth from '../../Auth0'
import SearchBar from '../SearchBar'


  const HomeLanding = () => {

    function login() {
      auth.signIn();
    }
  
    function logout() {
      auth.signOut();
    }
  
    function openNav() {
      // SearchBar.
    }
    const { isAuthenticated } = auth;
    return (
      // {
      !isAuthenticated()
        ? (
          <Container id="HeaderContainer">
            
            <AppName >
              {/* <Logo src={logo} /> */}
              {/* This href="/" will reload the page. Replace with "#" to scroll */}
              <a href="/">
                <h1>People</h1>
              </a>
            </AppName>
  
            <VisitorsNav id="VisitorsNav">
              <Nav id="Nav" />
              <LinkStyled id="LinkStyled" type="button" onClick={login}>
                Sign in
              </LinkStyled>
            </VisitorsNav>
          </Container>
        )
        : (
          <UserContainer id="UserContainer" isLoggedIn>
              <NameButton id="AppName_SideButton">
                  <SideBarButton id="SideBarButton" onClick={openNav}> ☰ </SideBarButton>
                  <AppName id="AppName"> <h1>PeopleBank</h1> </AppName>
              </NameButton>

              <SearchBarDiv>
                	<SearchBar />
              </SearchBarDiv>

              <UsersNav id="UsersNav">
                {/* {window.location.pathname === '/' && <Nav id="Nav" isLoggedIn />} */}
                  <LinkStyled id="LinkStyled" type="button" onClick={logout}>
                      Sign out
                  </LinkStyled>
              </UsersNav>
              
            </UserContainer>
              
          )
    )
  }


export default HomeLanding;

// styles
const UserContainer = styled.div`
	background: #F7F8FA;
	position: fixed;
	display: flex;
	width: 100%;
	top: 0;
  align-items: center;
  height: 80px;
  z-index: 2;
`
const NameButton = styled.div`
	display: flex;
	align-items: center;
	width: 25%;
`
const SearchBarDiv = styled.div`
	display: flex;
	width: 65%;
`
const UsersNav = styled.div`
  display: flex;
	width: 10%;
`;

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
const SideBarButton = styled.button`
cursor: pointer;

font-size: 14px;
margin-left: 5%;

height: 45px;
width: 45px;
border-radius: 100%;
color: #525A65;


background: none;
border: 1px solid #525A65;
&:hover {color: #F7F8FA}
&:hover {background: #525A65}


// @media (max-width: 400px) {
//   margin: 0 0 15px 0;
//   border: none;
//   color: white;
// }

`

const AppName = styled.div`
  align-self: center;

  h1 {
    font-family: 'Comfortaa', cursive;
    font-size: 30px;

    margin-left: 15%;
    width: 100%;
    color: black;
    // &:hover {color: white}
    // &:hover {border-bottom: 1px solid black}
  }
`;


const LinkStyled = styled.button`
  font-size: 14px;
  height: 25px;
  width: 300px;
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


