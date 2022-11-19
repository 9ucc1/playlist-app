import React from 'react'
import styled from 'styled-components'

function SongCard({ song, title, artist, image }){

    const Wrapper = styled.section`
    padding: 4em;
    background: lightgray;
  `;

    function handlePlaylistPatch(){
        console.log("clicked")
        //if playlistStatus=true, then button should show "remove from playlist"
        //update state uhghghgh
    }

    return (
        <div>
            <img src={image}></img>
            <h3>name: {title}</h3>
            <h3>artist: {artist}</h3>
            <button onClick={handlePlaylistPatch}>add/delete from playlist</button>
        </div>
    )
}

export default SongCard