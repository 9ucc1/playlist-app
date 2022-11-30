import React from 'react'
import styled from 'styled-components'

function SongCard({ song, title, artist, image, onPlaylistChange, onPlaylistRemove }){

    const Columns = styled.div`
    column-count: 2;
    text-align: left;
    `;

    function handlePlaylistPatch(){
        console.log("clicked")
        fetch(`http://localhost:3003/songs/${song.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
            playlistStatus: !song.playlistStatus,
            })
        })
        .then((r)=>r.json())
        .then((changedSong)=>{
                onPlaylistChange(changedSong)
            /*if (changedSong.playlistStatus ===true){
                onPlaylistChange(changedSong)
            } else {
                onPlaylistRemove(changedSong)
            }*/
        })
    }

    return (
        <Columns>
            <img src={image}></img>
            <h3>{title}</h3>
            <p>{artist}</p>
            <button onClick={handlePlaylistPatch}>
                {song.playlistStatus ? "Remove From" : "Add to"} Playlist
            </button>
        </Columns>
    )
}

export default SongCard