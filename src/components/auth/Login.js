import React, { Component } from 'react'
import './Login.css';
import loginIcon from '../../img/affiliates.png';
class Login extends Component {
  render() {
      //defining inline css
      const inlinecss={
        height:"200px"
    }
    return (
        <div class="container">
        <div className="login">
        <img src={loginIcon} style={inlinecss} alt=""/>
         <hr/>
         
         <hr/>
           <div className="form-group">
           <label forName="email">Usename:</label>
               <input type="text" value="" className="form-control" name="username" onChange={this.onChange}/>
           </div>   
           <div class="form-group">
                <label forName="pwd">Password:</label>
               <input type="password" value="" class="form-control"name="password" onChange={this.onChange}/>
           </div>

           <button type="submit" onClick={this.login} class="btn btn-primary btn-lg">Submit</button>
           <br/><br/><br/><br/><br/><br/>
     </div>
     </div>
    )
  }
}

export default Login;
