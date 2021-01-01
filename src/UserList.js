// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
  state={
    users: [],
    isLoading: true
  }

  componentDidMount(){
    // setTimeout(()=>{
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => this.setState({
    //     users: json, 
    //     isLoading: false
    // }))
    // }, 1000);

    setTimeout(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((json) => {
        this.setState({ 
          users: json.data, 
          isLoading: false
        })
      })
    }, 1000);
  }

  render() {
   return(
     <div>
      <h2>Users List</h2>
      {
        this.state.isLoading === true ? "Loading..."
        :this.state.users.map((users)=>(
          <div key={users.id}>
            <p>{users.name} @{users.username}</p>
          </div>
        ))
      }

     </div>
   )
  }

}
export default UserList;