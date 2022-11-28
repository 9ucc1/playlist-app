import React, { useState, useEffect } from 'react'
import SongCard from './SongCard.js'
import DeleteButton from './DeleteButton.js'
import styled from 'styled-components'

function Library( { onDeleteSong, onPlaylistChange}){
    const Background = styled.div`
    background: darksalmon;
    column-count: 2;
    column-gap: 1em;
    padding: 1em;
    padding-top: 150px;
    `
    const Wrapper = styled.p`
    padding: 1em;
    background: white;
    border: solid;
    border-color: gray;
    max-width: 400px;
  `;

    const [isLoaded, setIsLoaded] = useState(false)
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3003/songs")
        .then(response=>response.json())
        .then(response=>{
            setSongs(response)
            setIsLoaded(true)
        })
    }, [])
    if (!isLoaded){
        return(
            <p>Loading...</p>
        )
    }

    /*function handleDeleteSong(deletedSong){
        const updatedSongs = songs.filter((song)=> song.id !== deletedSong.id)
        setSongs(updatedSongs)
    }*/

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