import React, { Component } from 'react';

//Import css into JavaScript file
import './App.css';
import Header from './components/header/Header'
import Login from './components/auth/Login'
class App extends Component {
  
  /**
   * 
   */
  render() {
    //JSX <%=%>  <% %>
    //JSX  = {}  
    return(
      <div>
          <Header/>
          <Login/>
      </div>
    );
     
  }
}

export default App;



