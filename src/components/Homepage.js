import React from 'react'
import styled from 'styled-components'

function Homepage(){
    const Wrapper = styled.section`
    padding: 1em;
    background: lightgray;
    width: 500px;
    `;
    const Outside = styled.p`
    text-align: center;
    `;

    return (
        <Wrapper>
            Welcome to the Playlist Builder! Upload a song by clicking Add Song,
            or browse the existing library to customize your own playlist!
        </Wrapper>
    )
}

export default Homepage