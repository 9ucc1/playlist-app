import React, {useEffect, useState} from 'react'
import SongCard from './SongCard.js'

function Playlist(){

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

    const playlistSongs = songs.filter(song=>song.playlistStatus === true)
    
    return(
        <div>
            playlist renders songs added from library
            {playlistSongs.map(song=>(
                <SongCard 
                    song={playlistSongs}
                    key={song.id}
                    id={song.id} 
                    title={song.title} 
                    artist={song.artist}
                    image={song.image}
                />
            ))}
        </div>
    )
}

export default Playlist