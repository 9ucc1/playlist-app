import React from 'react'
import NavBar from './NavBar.js'
import styled from 'styled-components'

function Header(){

    const Header = styled.header`
        background-color: cadetblue;
        min-height: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        width: 100%;
        position: fixed;
        text-align: center;
    `;

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: white;
        font-family: "Lucida Console", "Courier New", monospace;
    `;

    return(
        <>
        <Header>
            <Title>playlist builder 3000</Title>
            <NavBar />
        </Header>
        </>
    )
}

export default Header