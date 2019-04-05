import React from 'react'

const Friend = props => {
    const friend = props.friends.find(friend => `${friend.id}` === props.match.params.friendId)
    if (!friend) return <h3>Loading data...</h3>;
    return (
        <div className="friend-card">
        <h1>{friend.name} </h1>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        </div>
    )
}

export default Friend