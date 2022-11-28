import React from 'react'
import styled from 'styled-components'

function DeleteButton({song, onDeleteSong}){

    const Button = styled.button`
    font-size: 12px
    `

    function handleDelete(){
        fetch(`http://localhost:3003/songs/${song.id}`, {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(()=>onDeleteSong(song))
        alert("song deleted from library!")
    }

    return <Button onClick={handleDelete}>Delete from Library</Button>
}

export default DeleteButton