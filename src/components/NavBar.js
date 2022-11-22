import {NavLink} from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "dimgray",
    textDecoration: "none",
    color: "white",
  };

function NavBar(){
    return(
        <div className="navbar">
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Home
            </NavLink>
            <NavLink
                to="/songs"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Library
            </NavLink>
            <NavLink
                to="/playlist"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Playlist
            </NavLink>
            <NavLink
                to="/songs/new"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Add Song
            </NavLink>
        </div>
    )
}

export default NavBar