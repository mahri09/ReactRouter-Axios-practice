import React, { Component } from 'react';
import "./App.css";
import {BrowserRouter as Router, Route, Link, Navlink, Redirect, Switch} from "react-router-dom";
import UserList from './UserList';
import Error from './Error';

const Contact=()=>{
  return(
    <h2>Contact Page</h2>
  )
}

const About=({match})=>{
  console.log(match);
  if(match.params.id==='1' || match.params.id==='2'){
    return <h2>About Page {match.params.id}</h2>
  }else{
    return <h3>Not found</h3>
  }
}

class App extends Component{
  
  render(){
    return (
      <Router>
        <div className='App'>
          <h3>App Component</h3>
          <br/>
          <ul>
          <Link to='/' exact strict> 
          <li> Home </li>
          </Link>
          <Link to='/contact' exact strict>
            <li>Contact</li>
          </Link>
          <Link to='/about/1' exact>
            <li>About-1</li>
          </Link>
          <Link to='/about/2' exact>
            <li>About-2</li>
          </Link>
          <Link to='/userList' exact>
            <li>UserList</li>
          </Link>
          </ul>

          <Switch>
            <Route path="/"
              exact strict
              render={()=>{
                return <h2>Home Page</h2>
              }}/>
            <Route path='/contact'
              exact strict
              component={Contact}
            />
            <Route path="/about/:id"
              exact
              component={About}
            />
            <Route path="/userList"
              exact
              strict
              component={UserList}
            />
            <Route component={Error}
            />
          </Switch>
        
        </div>
      </Router>
    );
  }
}

export default App;
