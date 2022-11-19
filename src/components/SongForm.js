import React, { useState } from 'react'

const initialNewSong = {
    title: "",
    artist: "",
    image: "",
}

function SongForm(){

//find out how to do default image: https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/music-circle-blue-512.png

const [newSong, setNewSong] = useState(initialNewSong)

//const [title, setTitle] = useState("")
//const [artist, setArtist] = useState("")
//const [image, setImage] = useState("")
const [playlistStatus, setPlaylistStatus] = useState(false)

/*function handleTitleChange(event){
    setTitle(event.target.value)
}

function handleArtistChange(event){
    setArtist(event.target.value)
}

function handleImageChange(event){
    setImage(event.target.value)
}*/

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
    .then(song=>console.log("posted:", song))
    setNewSong(initialNewSong)
    alert("added song!")
}
//form here to post to dbjson,
//new song, artist, album art with default option
//goes into LIBRARY, maybe checkboxes to add to playlist too?

return(
    <form>
        <label> Title:
            <input 
                type="text" name="title" 
                value={newSong.title} onChange={handleChange}
                placeholder="enter text"
            />
        </label>
        <label> Artist:
            <input 
                type="text" name="artist"
                value={newSong.artist} onChange={handleChange}
                placeholder="enter text"
            />
        </label>
        <label> Image URL:
            <input 
                type="text" name="image"
                value={newSong.image} onChange={handleChange}
                placeholder="enter url"
            />
        </label>
        <label>Add to playlist too?</label>
        <input
            type="checkbox" name="playlistStatus"
            checked={playlistStatus} onChange={handlePlaylistChange} 
        />
        <button type="submit" onClick={handleSubmit}>Add to Library</button>
    </form>
)

}

export default SongForm