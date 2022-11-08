import React, { useState, useEffect } from 'react'
import SongCard from './SongCard.js'

function Library(){

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
            here are all of your saved songs!
            {songs.map(song=>{
            return (<>
            <SongCard 
                key={song.id}
                song={song}
                id={song.id} 
                title={song.title} 
                artist={song.artist}
                onDeleteSong={handleDeleteSong}
            />
            </>
            )})}
        </div>
    )
}
export default Library