import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Friend = props => {
    const friend = props.friends.find(friend => `${friend.id}` === props.match.params.friendId)
    if (!friend) return <h3>Loading data...</h3>;
    return (
        <div className="friend-card-wrapper">
            <div className="friend-card">
                <h1>{friend.name} </h1>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                <Link to={`/${friend.id}/update`}><button className="other-btn grn">Update Friend</button></Link>
                <button onClick={e=>props.destroyFriend(e, friend.id)} className="other-btn red">Destroy Friend</button>
            </div>
            
        </div>
    )
}

export default Friend