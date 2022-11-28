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
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/songs/new">
          <SongForm/>
        </Route>
        <Route path="/songs">
          <Library/>
        </Route>
        <Route path="/playlist">
          <Playlist/>
        </Route>
        <Route path="/">
          <Homepage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
