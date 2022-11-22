import React from 'react'
import styled from 'styled-components'

function Homepage(){
    const Wrapper = styled.p`
    padding: 1em;
    background: lightgray;
    margin-left: 200px;
    margin-right: 200px;
    `;

    return (
        <Wrapper>
            Welcome to the Playlist Builder! Upload a song by clicking Add Song,
            or browse the existing library to customize your own playlist.
        </Wrapper>
    )
}

export default Homepage