import React from 'react'
import styled from 'styled-components';

const Features = () => {
    return (
        <LandingFeatures id="features">
            <h2>
                These are the great features...
            </h2>
        </LandingFeatures>
    )
}

export default Features

const LandingFeatures = styled.div`
background-color: green;
padding-top: 55px;
border: 1px solid pink;
height: 100vh;
width: 100%;
`;