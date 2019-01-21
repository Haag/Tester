import React from 'react';
import styled, { keyframes } from 'styled-components';
import WhyPeople from './WhyPeople';
import Features from './Features';
// import Pricing from './Pricing';

const Landing = ({ auth }) => {
  function login() {
    auth.signIn();
  }



  return (
    <WrapperContainer>
      <Header>
        <JumboTron>
          <div>
            <h1>Focus on your what matters to you.</h1>
            <h1>Blah blah blah blah blah blah</h1>
            {/* <h1>Let us take care of remembering the details.</h1> */}
            {/* <p>We believe in providing a comfortable and intuitive storage bank of personal contacts. Whether you're adding new associates or reviewing previous, we have what you need.</p> */}
          </div>
          <CTAButtonsGroup>
            <CTABtn onClick={login}>Sign up</CTABtn>
            <a href="#why">
              <CTABtn learn href="#why">Learn more</CTABtn>
            </a>
            <CTABtn learn2 >Spotify</CTABtn>
          </CTAButtonsGroup>
        </JumboTron>
        <ArrowContainer>
          <div>
            <a href="#why">
              <Arrow />
            </a>
          </div>
        </ArrowContainer>
      </Header>
      <Body>
        <WhyPeople />
        <Features />
        {/* <Pricing /> */}
        <BackToTopContainer>
          <a href="/#">Back to top</a>
          <div> HELLO. THIS IS THE BOTTOM</div>
        </BackToTopContainer>
      </Body>
    </WrapperContainer>
  );
};

export default Landing

// styles


const WrapperContainer = styled.div`

@media (max-width: 540px) {
  h1 {
    font-size: 28px;
  }
}
`;

const Header = styled.div`
height: 100vh;
`;

const JumboTron = styled.div`
padding: 5% 10%;
  height: 55vh;
  background-size: cover;
  background-position: center bottom;
  letter-spacing: 1px;
  // color: #3e3d3d;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::before {
    background-size: cover;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 65vh;
    z-index: -2;
    opacity: 0.2;
    }

    div {
      max-width: 700px;
      width: 100%;
    }

    h1 {
      font-size: 38px;
    }

    p {
      margin-top: 30px;
      line-height: 25px;
    }
`;

const Body = styled.div`
  margin-top: 55px;
  position: relative;
  flex:1;
  overflow:hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling:touch;
`;

const CTAButtonsGroup = styled.div`
text-align: center;
margin: 0 auto;

button {
  // width: 200px;
  
}
`;

const CTABtn = styled.button`
font-size: 18px;
height: 40px;
&:hover {color: white}
&:hover {background: black}
&:hover {border: black}
margin-right: ${props => props.learn ? 0 : '20px'};
color: ${props => props.learn ? null : 'black'};
border-color: ${props => props.learn ? null : 'black'};
background: ${props => props.learn ? null : 'none'};

margin-right: ${props => props.learn2 ? 0 : '20px'};
width: 200px;

@media (max-width: 540px) {
  width: 115px;
}
`;

const ArrowContainer = styled.div`
position: absolute;
top: 95%;
left: 50%;
transform: translate(-50%, -50%);
`;

const BackToTopContainer = styled.div`
position: absolute;
top: 95%;
right: 5%;
`;

const animate = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 1;
}
100% {
  opacity: 0;
}
  `;

const Arrow = styled.span`
display: block;
width: 30px;
height: 30px;
border-color: black; // working in dev tools - not here
border-bottom: 1px solid;
border-right: 1px solid;
transform: rotate(45deg);
animation: ${animate} 2s infinite;
`;
