import React from 'react'

const UpdateForm = props=> {

    return (
        <div className="form">
            <form onSubmit={props.updateFriend}>
            <input required placeholder="name..." name="name" onChange={props.handleChanges} value={props.name}></input>
            <input required placeholder="age..." name="age" onChange={props.handleChanges} value={props.age}></input>
            <input required placeholder="email..." name="email" onChange={props.handleChanges} value={props.email}></input>
            <button type="submit" className="btn">Update Friend</button>
            </form>
        </div>
    )

}

export default UpdateForm