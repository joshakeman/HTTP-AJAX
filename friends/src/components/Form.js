import React from 'react'

const Form = props => {


    return (
        <div className="form">
            <form onSubmit={props.createFriend}>
            <input required placeholder="name..." name="name" onChange={props.handleChanges}></input>
            <input required placeholder="age..." name="age" onChange={props.handleChanges}></input>
            <input required placeholder="email..." name="email" onChange={props.handleChanges}></input>
            <button type="submit" >Add New Friend</button>
            </form>
        </div>
    )

}

export default Form