import '../App.css';
import Header from "./Header.js"
import { Route, Switch } from 'react-router-dom'
import Homepage from "./Homepage.js"
import Library from './Library.js'
import SongForm from './SongForm.js'
import Playlist from './Playlist.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/library">
          <Library/>
        </Route>
        <Route path="/songform">
          <SongForm/>
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
