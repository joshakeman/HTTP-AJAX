import React from 'react'
import '../App.css'

const FriendList = props => {
    
return (
    <div className="friends-container"> 
        {props.friends.map(friend => 
            <div key={friend.id} className="friend-card">
                <h2>{friend.name}</h2>
                <p><span>Age</span>: {friend.age}</p>
                <p><span>Email</span>: {friend.email}</p>
            </div>
        )}
    </div>
    )
}

export default FriendList