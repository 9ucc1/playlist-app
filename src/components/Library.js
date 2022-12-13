import React from 'react'
import SongCard from './SongCard.js'
import DeleteButton from './DeleteButton.js'
import styled from 'styled-components'

function Library({ songs, onDeleteSong, onPlaylistChange }){
    
    const Background = styled.div`
        background: darksalmon;
        column-count: 3;
        column-gap: 1em;
        padding: 1em;
        padding-top: 150px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `;
    const Wrapper = styled.p`
        padding: 1em;
        background: white;
        border: solid;
        border-color: gray;
        width: 350px;
    `;

    return (
        <>
        <Background>
            {songs.map(song=>
            (<Wrapper>
            <SongCard 
                key={song.id}
                song={song}
                id={song.id}
                title={song.title} 
                artist={song.artist}
                image={song.image}
                onPlaylistChange={onPlaylistChange}
            />
            <DeleteButton 
                song={song}
                onDeleteSong={onDeleteSong}
            />
            </Wrapper>
            ))}
        </Background>
        </>
    )
}
export default Library

/*
            <input type="text" onChange={handleSearch} value={search}/>

    const [filterList, setFilterList] = useState(songs)
    const [search, setSearch] = useState("")

    function handleSearch(event){
        setSearch(event.target.value)
        console.log(search)
        if (event.target.value === ""){
            setFilterList(songs)
        } else {
            const searchedValues = songs.filter((song) =>
                song.title.toLowerCase().includes(event.target.value.toLowerCase())
            )
                setFilterList(searchedValues)
        }
    }


    function Timer(){

    let timer

    useEffect(() => {
        timer = setInterval(()=>{
            setSeconds(seconds + 1);
            if (seconds ===59){
                setMinutes(minutes+1)
                setSeconds(0)
            }
    }, 1000)
        return () => clearInterval(timer)
    })

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

    return (
        <div>{minutes<10 ? "0"+minutes : minutes}:{seconds<10 ? "0"+seconds : seconds}</div>
    )
}

*/