import React, { useState, useEffect } from 'react'
import '../App.css';
import Header from "./Header.js"
import { Route, Switch } from 'react-router-dom'
import Homepage from "./Homepage.js"
import Library from './Library.js'
import SongForm from './SongForm.js'
import Playlist from './Playlist.js'

//make an error route, page does not exist

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

  function handleDeleteSong(deletedSong){
    const updatedSongs = songs.filter((song)=> song.id !== deletedSong.id)
    setSongs(updatedSongs)
}

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
            songs={songs}
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
