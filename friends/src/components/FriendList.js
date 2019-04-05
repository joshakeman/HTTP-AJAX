import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const FriendList = props => {
    
return (
    <div className="friends-container"> 
        {props.friends.map(friend => 
            <div key={friend.id} className="friend-card">
                <Link to={`/${friend.id}`}><h2>{friend.name}</h2></Link>
                <p><span>Age</span>: {friend.age}</p>
                <p><span>Email</span>: {friend.email}</p>
            </div>
        )}
    </div>
    )
}

export default FriendList