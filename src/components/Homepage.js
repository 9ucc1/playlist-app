import React from 'react'
import styled from 'styled-components'

function Homepage(){
    const Background = styled.div`
    background: white;
    padding-top: 150px;
    `;
    const Wrapper = styled.p`
    padding: 1em;
    background: lightgray;
    margin-left: 20%;
    margin-right: 20%;
    font-family: "Courier New", monospace;
    font-weight: bold;
    `;

    return (
        <Background>
        <Wrapper>
            Welcome to the Playlist Builder! Upload a song by clicking Add Song,
            or browse the existing library to customize your own playlist.
        </Wrapper>
        </Background>
    )
}

export default Homepage