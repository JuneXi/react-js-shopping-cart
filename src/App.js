import React, { Component } from 'react';

//Import css into JavaScript file
import './App.css';
import Header from './components/header/Header'
import Login from './components/auth/Login'
import SignUp from './components/customer/SignUp'
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
          <div class="row">
            <div class="col-6">
                    <Login/>
              </div>
              <div class="col-6">
                <SignUp/>
            </div>
  
          </div>
           
      </div>
    );
     
  }
}

export default App;



