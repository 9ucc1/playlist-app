import React, { useState } from 'react'
import styled from 'styled-components'

function SongForm({ onAddSong }){

    const Wrapper = styled.section`
    padding: 1em;
    background: white;
    `;
    const FormHeader = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: black;
    padding-top: 150px;
    font-family: "Lucida Console", "Courier New", monospace;
    `;

    const initialNewSong = {
        title: "",
        artist: "",
        image: "",
    }

    const [newSong, setNewSong] = useState(initialNewSong)
    const [playlistStatus, setPlaylistStatus] = useState(false)

    function handleChange(event){
        setNewSong((currentSongState)=> (
            {...currentSongState, [event.target.name]: event.target.value}
        ))
    }

    function handlePlaylistChange(event){
        setPlaylistStatus(event.target.checked)
    }

    function handleSubmit(event){
        event.preventDefault()
        const formData = { 
            title: newSong.title, 
            artist: newSong.artist, 
            image: newSong.image, 
            playlistStatus: playlistStatus}
        fetch('http://localhost:3003/songs',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
        .then(r=>r.json())
        .then(song=>onAddSong(song))
        setNewSong(initialNewSong)
        setPlaylistStatus(false)
        alert("added song!")
    }

    return(
        <>
        <FormHeader>New Song</FormHeader>
        <form>
            <h3>Title: 
                <input 
                    type="text" name="title" 
                    value={newSong.title} onChange={handleChange}
                    placeholder="enter text"
                />
            </h3>
            <h3> Artist: 
                <input 
                    type="text" name="artist"
                    value={newSong.artist} onChange={handleChange}
                    placeholder="enter text"
                />
            </h3>
            <h3>Image URL: 
                <input 
                    type="text" name="image"
                    value={newSong.image} onChange={handleChange}
                    placeholder="enter url"
                />
            </h3>
            <label>Add to playlist too</label>
            <input
                type="checkbox" name="playlistStatus"
                checked={playlistStatus} onChange={handlePlaylistChange} 
            />
            <Wrapper>
                <button type="submit" onClick={handleSubmit}>
                    Add to Library
                </button>
            </Wrapper>
        </form>
        </>
    )
}

export default SongForm