import React, { useState, useEffect } from 'react'
import SongCard from './SongCard.js'
import DeleteButton from './DeleteButton.js'
import styled from 'styled-components'

function Library(){
    const Wrapper = styled.section`
    padding: 4em;
    background: lightgray;
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

    function handleDeleteSong(deletedSong){
        const updatedSongs = songs.filter((song)=> song.id !== deletedSong.id)
        setSongs(updatedSongs)
    }

    //be able to sort songs by artist or title?
    return (

        <div>
            here are all of your saved songs! add button that adds to playlist
            {songs.map(song=>
            (<Wrapper>
            <SongCard 
                key={song.id}
                song={song}
                id={song.id}
                title={song.title} 
                artist={song.artist}
                image={song.image}
            />
            <DeleteButton 
                song={song}
                onDeleteSong={handleDeleteSong}
            />
            </Wrapper>
            ))}
        </div>
    )
}
export default Library