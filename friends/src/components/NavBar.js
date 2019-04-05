import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="nav-bar">
                <button className="btn">Friend List</button>
                <Link to="/add-friend"><button className="btn">Add Friend</button></Link>
            </div>
        </div>
    )
}

export default NavBar