import React, { useState } from 'react'

function SongForm(){

//find out how to do default image: https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/music-circle-blue-512.png

const [title, setTitle] = useState("")
const [artist, setArtist] = useState("")
const [image, setImage] = useState("")
const [playlistStatus, setPlaylistStatus] = useState(false)

function handleTitleChange(event){
    setTitle(event.target.value)
}

function handleArtistChange(event){
    setArtist(event.target.value)
}

function handleImageChange(event){
    setImage(event.target.value)
}

function handlePlaylistChange(event){
    setPlaylistStatus(event.target.checked)
}

function handleSubmit(event){
    event.preventDefault()
    const formData = { title: title, artist: artist, image: image, playlistStatus: playlistStatus}
    console.log(formData)
    fetch('http://localhost:3003/songs',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
    })
    .then(r=>r.json())
    .then(newSong=>console.log("posted:", newSong))
    setTitle("")
    setArtist("")
    alert("added song!")
}

return(
    <div>form here to post to dbjson,
        new song, artist, album art with default option
        goes into LIBRARY, maybe checkboxes to add to playlist too?
        <form>
            <label> Title:
                <input 
                    type="text" 
                    value={title} 
                    onChange={handleTitleChange}
                    placeholder="enter text"
                />
            </label>
            <label> Artist:
                <input 
                    type="text" 
                    value={artist} 
                    onChange={handleArtistChange}
                    placeholder="enter text"
                />
            </label>
            <label> Image URL:
                <input 
                    type="text" 
                    value={image} 
                    onChange={handleImageChange}
                    placeholder="enter url"
                />
            </label>
            <label>Add to playlist too?</label>
      <input
        type="checkbox"
        onChange={handlePlaylistChange}
        checked={playlistStatus}
      />
            <button type="submit" onClick={handleSubmit}>Add to Library</button>
        </form>
    </div>
)
}

export default SongForm