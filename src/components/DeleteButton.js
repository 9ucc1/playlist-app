import React from 'react'

function DeleteButton({song, onDeleteSong}){

    function handleDelete(){
        fetch(`http://localhost:3003/songs/${song.id}`, {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(()=>onDeleteSong(song))
        alert("song deleted!")
    }

    return <button onClick={handleDelete}>Delete from Library</button>
}

export default DeleteButton