import React, { useState } from 'react'

function SongForm(){

const [title, setTitle] = useState("titlehere")
const [artist, setArtist] = useState("artisthere")
const [playlist, setPlaylist] = useState(false)

function handleTitleChange(event){
    setTitle(event.target.value)
}

function handleArtistChange(event){
    setArtist(event.target.value)
}

function handlePlaylistChange(event){
    setPlaylist(event.target.checked)
    console.log(playlist)
}

function handleSubmit(event){
    event.preventDefault()
    const formData = { title: title, artist: artist}
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
    alert("added to library!")
    //if checkbox checked, add to playlist somehow??
}

return(
    <div>form here to post to dbjson,
        new song, artist, album art with default option
        goes into LIBRARY, maybe checkboxes to add to playlist too?
        <form>
            <label> Title:
                <input type="text" value={title} onChange={handleTitleChange}/>
            </label>
            <label> Artist:
                <input type="text" value={artist} onChange={handleArtistChange}/>
            </label>
            <label>Add to playlist too?</label>
      <input
        type="checkbox"
        onChange={handlePlaylistChange}
        checked={playlist}
      />
            <button type="submit" onClick={handleSubmit}>Add to Library</button>
        </form>
    </div>
)
}

export default SongForm