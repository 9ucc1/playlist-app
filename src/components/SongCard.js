import React from 'react'

function SongCard({ song, title, artist, image }){

    function handlePlaylistPatch(){
        console.log("clicked")
        //if playlistStatus=true, then button should show "remove from playlist"
        //update state uhghghgh
    }

    return (
        <div>
            <h3>name: {title}</h3>
            <h3>artist: {artist}</h3>
            <img src={image}></img>
            <button onClick={handlePlaylistPatch}>add/delete from playlist</button>
        </div>
    )
}

export default SongCard