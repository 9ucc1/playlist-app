import {NavLink} from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
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
                    background: "darkblue",
                  }}
            >
                Home
            </NavLink>
            <NavLink
                to="/library"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                  }}
            >
                Library
            </NavLink>
            <NavLink
                to="/playlist"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                  }}
            >
                Playlist
            </NavLink>
            <NavLink
                to="/songform"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                  }}
            >
                Add Song
            </NavLink>
        </div>
    )
}

export default NavBar