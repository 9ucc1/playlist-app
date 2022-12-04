import React from 'react'
import SongCard from './SongCard.js'
import styled from "styled-components"

function Playlist({ songs, onPlaylistChange }){

    const Wrapper = styled.p`
        padding: 1em;
        background: white;
        margin-left: 30%;
        margin-right: 30%;
        min-width: 300px;
        border: solid;
        border-color: lightgray;
    `;
    const Background = styled.div`
        background: blanchedalmond;
        padding-top: 150px;
        padding-bottom: 150px;
    `;
    const Header = styled.h3`
        font-size: 1.5em;
        font-family: "Lucida Console", "Courier New", monospace;
    `;

    const filteredSongs = songs.filter(song=>song.playlistStatus === true)
    
    return(
        <Background>
            <Header>My Playlist</Header>
            {filteredSongs.map(song=>(
                <Wrapper>
                    <SongCard 
                    song={song}
                    key={song.id}
                    id={song.id} 
                    title={song.title} 
                    artist={song.artist}
                    image={song.image}
                    onPlaylistChange={onPlaylistChange}
                    />
                </Wrapper>
            ))}
        </Background>
    )
}

export default Playlist