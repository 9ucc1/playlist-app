import React, {useEffect, useState} from 'react'
import SongCard from './SongCard.js'
import styled from "styled-components"

function Playlist(){
    const Wrapper = styled.p`
    padding: 1em;
    background: white;
    margin-left: 100px;
    margin-right: 100px;
    border: solid;
  `;
    const Background = styled.div`
    background: darksalmon;
    `;

    const [isLoaded, setIsLoaded] = useState(false)
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3003/songs/`)
        .then(response=>response.json())
        .then(response=>{
            const playlistTrue = response.filter(song=>song.playlistStatus === true)
            //setSongs(response)
            setSongs(playlistTrue)
            setIsLoaded(true)
        })
    }, [])
    if (!isLoaded){
        return(
            <p>Loading...</p>
        )
    }

    //const playlistSongs = songs.filter(song=>song.playlistStatus === true)
    
    return(
        <>
            <p>here is your playlist</p>
            <Background>
            {songs.map(song=>(
                <Wrapper>
                    <SongCard 
                    song={song}
                    key={song.id}
                    id={song.id} 
                    title={song.title} 
                    artist={song.artist}
                    image={song.image}
                    //playlistStatus={song.playlistStatus}
                    />
                </Wrapper>
            ))}
            </Background>
        </>
    )
}

export default Playlist