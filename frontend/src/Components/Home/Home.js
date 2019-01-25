import React from 'react'
import styled from 'styled-components'
import auth from '../../Auth0'
import HomeLanding from './HomeLanding'
import SideBar from '../SideBar'


  const Home = () => {
    return (
      <div>
        <HomeLanding />
        <SideBar />
      </div>
    )

  }


export default Home;

// styles
const UserContainer = styled.div`
	background: #F7F8FA;
	position: fixed;
	display: flex;
	width: 100%;
	top: 0;
	align-items: center;
`
