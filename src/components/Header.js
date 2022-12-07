import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "dimgray",
    textDecoration: "none",
    color: "white",
  };

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
        <div className="navbar">
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Home
            </NavLink>
            <NavLink
                to="/songs"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Library
            </NavLink>
            <NavLink
                to="/playlist"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Playlist
            </NavLink>
            <NavLink
                to="/songs/new"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Add Song
            </NavLink>
        </div>
    </Header>
    </>
    )
}

export default Header