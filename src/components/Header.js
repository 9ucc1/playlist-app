import React from 'react'
import NavBar from './NavBar.js'
import styled from 'styled-components'

function Header(){

    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: lightblue;
  `;
  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

    return(
        <>
        <header className="App-header">
        <Title>playlist builder 3000</Title>
            <NavBar />
        </header>
        </>
    )
}

export default Header