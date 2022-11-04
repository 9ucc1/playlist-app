import React from 'react'

function SongCard({ id, title, artist }){

    return (
        <div>song {id} name: {title} artist: {artist}</div>
    )
}

export default SongCard