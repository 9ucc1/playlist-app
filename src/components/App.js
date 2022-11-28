import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from "./Header.js"
import Homepage from "./Homepage.js"
import Library from './Library.js'
import SongForm from './SongForm.js'
import Playlist from './Playlist.js'

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [songs, setSongs] = useState([])

  useEffect(()=>{
      fetch("http://localhost:3003/songs")
      .then(response=>response.json())
      .then(response=>{
          setSongs(response)
          setIsLoaded(true)
      })
  }, [])
  if (!isLoaded){
      return(
          <p>Loading!!!</p>
      )
  }

  const updatedSongs = [...songs]

  function handleDeleteSong(deletedSong){
    //const updatedSongs = songs.filter((song)=> song.id !== deletedSong.id)
    updatedSongs.filter((song)=> song.id !== deletedSong.id)
    setSongs(updatedSongs)
    //console.log("delete")
}

//destructive filter

function handlePlaylistChange(changedSong){
  const updatedSongs = songs.map((song)=> {
    if (song.id===changedSong.id){
      return changedSong
    } else {
      return song
    }
  })
  setSongs(updatedSongs)
  if (changedSong.playlistStatus === false){
    alert("removed from playlist!")
  } else {alert("added to playlist")}
}

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/songs/new">
          <SongForm/>
        </Route>
        <Route path="/songs">
          <Library 
            songs={updatedSongs}
            onDeleteSong={handleDeleteSong}
            onPlaylistChange={handlePlaylistChange}
          />
        </Route>
        <Route path="/playlist">
          <Playlist 
            songs={songs}
            onPlaylistChange={handlePlaylistChange}
          />
        </Route>
        <Route path="/">
          <Homepage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
