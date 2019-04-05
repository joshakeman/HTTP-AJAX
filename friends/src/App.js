import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Route, Link, NavLink } from 'react-router-dom'

import Form from './components/Form'
import FriendList from './components/FriendList'
import NavBar from './components/NavBar'
import Friend from './components/Friend'
import UpdateForm from './components/UpdateForm'


class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    // ajax request to get the items from a server on mount
    //1. invoke .get
    //2. pass in the server url - base url + endpoint
    axios.get('http://localhost:5000/friends')
    .then(res => {
      this.setState({ friends: res.data });
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  currentFriend = friend => {
    this.setState({
      name: friend.name,
      age: friend.age,
      email: friend.email,
      editingId: friend.id
    })
    this.props.history.push(`/${friend.id}`)
  }

  createFriend = (e)=> {
    e.preventDefault();

    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    axios.post('http://localhost:5000/friends', newFriend)
    .then(res => {
      this.setState({ friends: [...this.state.friends, newFriend],
        name: '',
        age: '',
        email: ''
      });
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

    this.props.history.push("/")

  }

  handleChanges = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

updateFriend = (e)=> {
  e.preventDefault();

  axios.put(`http://localhost:5000/friends/${this.state.editingId}`, {name: this.state.name, age: this.state.age, email:this.state.email})
    .then(res => {
      this.setState({ friends: res.data,
        name: '',
        age: '',
        email: ''
      });
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

    this.props.history.push("/")

}

destroyFriend = (e, id) => {
  e.preventDefault()

  axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log('Data is back, now set state and reroute', res.data);
        this.setState({
          friends: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });

}


  render() {
    console.log(this.props)
    return (
      <div className="App">
          <NavBar />
          <Route path="/add-friend" render={props => 
          <Form 
          {...props}
          createFriend={this.createFriend}
          handleChanges={this.handleChanges}
          />
        }/>
    

          <Route exact path="/" render={props => 
          <FriendList 
          friends={this.state.friends}
          currentFriend={this.currentFriend}
          />
          }/>


          <Route path="/:friendId" render={props => 
          <Friend 
          {...props}
          friends={this.state.friends}
          destroyFriend={this.destroyFriend}
          />}/>

          <Route path="/:friendId/update" render={props =>
            <UpdateForm
            {...props}
            handleChanges={this.handleChanges}
            updateFriend={this.updateFriend}
            {...this.state} />
          }/>

      </div>
    );
  }
}

export default App;
