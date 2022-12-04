import React from 'react'
import SongCard from './SongCard.js'
import DeleteButton from './DeleteButton.js'
import styled from 'styled-components'

function Library({ songs, onDeleteSong, onPlaylistChange }){
    const Background = styled.div`
    background: darksalmon;
    column-count: 3;
    column-gap: 1em;
    padding: 1em;
    padding-top: 150px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `
    const Wrapper = styled.p`
    padding: 1em;
    background: white;
    border: solid;
    border-color: gray;
    width: 350px;
  `;

    return (
        <Background>
            {songs.map(song=>
            (<Wrapper>
            <SongCard 
                key={song.id}
                song={song}
                id={song.id}
                title={song.title} 
                artist={song.artist}
                image={song.image}
                onPlaylistChange={onPlaylistChange}
            />
            <DeleteButton 
                song={song}
                onDeleteSong={onDeleteSong}
            />
            </Wrapper>
            ))}
        </Background>
    )
}
export default Library