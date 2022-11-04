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

    function handleDeleteSong(event){
        console.log(event)
    }

    return (

        <div>
            library renders all songs added from form, 
            fetch request from dbjson
            {songs.map(song=>{
            return (<>
            <SongCard 
                id={song.id} 
                title={song.title} 
                artist={song.artist}
            />
            <button>
                add to playlist
            </button>
            <button onClick={handleDeleteSong}>
                remove from library
            </button>
            </>
            )})}
        </div>
    )
}
export default Library