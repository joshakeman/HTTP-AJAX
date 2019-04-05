import React from 'react'
import '../App.css'

const Form = props => {

const closeForm = e => {
    e.preventDefault()
    props.history.push("/")
}

    return (
        <div className="form">
            <form onSubmit={props.createFriend}>
            <input required placeholder="name..." name="name" onChange={props.handleChanges}></input>
            <input required placeholder="age..." name="age" onChange={props.handleChanges}></input>
            <input required placeholder="email..." name="email" onChange={props.handleChanges}></input>
            <button onClick={closeForm} type="submit" class="btn">Add New Friend</button>
            </form>
        </div>
    )

}

export default Form