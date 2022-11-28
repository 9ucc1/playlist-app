import React, {useEffect, useState} from 'react'
import SongCard from './SongCard.js'
import styled from "styled-components"

function Playlist( {songs, onPlaylistChange} ){

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
    `;
    const Header = styled.h3`
    font-size: 1.5em;
    font-family: "Lucida Console", "Courier New", monospace;
    `

    const [isLoaded, setIsLoaded] = useState(false)
    const [playlistSongs, setPlaylistSongs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3003/songs/`)
        .then(response=>response.json())
        .then(response=>{
            const playlistTrue = response.filter(song=>song.playlistStatus === true)
            //setSongs(response)
            setPlaylistSongs(playlistTrue)
            setIsLoaded(true)
        })
    }, [])
    if (!isLoaded){
        return(
            <p>Loading...</p>
        )
    }

    //const filteredSongs = songs.filter(song=>song.playlistStatus === true)
    //const [playlistSongs, setPlaylistSongs] = useState(filteredSongs)

    function handlePlaylistRemove(changedSong){
        const updatedSongs = playlistSongs.filter((song)=> song.id !== changedSong.id)
        setPlaylistSongs(updatedSongs)
        alert("removed from playlist!")
    }

    //const playlistSongs = songs.filter(song=>song.playlistStatus === true)
    
    return(
        <Background>
            <Header>My Playlist</Header>
            {playlistSongs.map(song=>(
                <Wrapper>
                    <SongCard 
                    song={song}
                    key={song.id}
                    id={song.id} 
                    title={song.title} 
                    artist={song.artist}
                    image={song.image}
                    //playlistStatus={song.playlistStatus}
                    //onPlaylistChange={onPlaylistChange}
                    onPlaylistRemove={handlePlaylistRemove}
                    />
                </Wrapper>
            ))}
        </Background>
    )
}

export default Playlist