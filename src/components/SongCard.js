import React from 'react'

function SongCard({ song, id, title, artist, onDeleteSong }){

    function handleSongcardDelete(){
        fetch(`http://localhost:3003/songs/${song.id}`, {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(()=>onDeleteSong(song))
        alert("song deleted!")
  }

    return (
        <div>
            song {id} name: {title} artist: {artist}
            <button onClick={handleSongcardDelete}>Delete Song</button>
        </div>
    )
}

export default SongCard