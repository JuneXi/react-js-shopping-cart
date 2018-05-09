import React, { Component } from 'react'
import './SignUp.css';
import add from '../../img/add.png';
import axios from 'axios';


/**
 * 
 */
 class SignUp extends Component {

    constructor(props){
        super(props);
        this.state={username:"",password:"",statusmessage:""};
    }

  render() {
    //defining inline css
    const inlinecss={
        height:"60px"
    }
    return (
        <div className="container">
         
        <div className="login">
        <img src={add} style={inlinecss} alt=""/>
         <hr/>
         <span className="error-message">{this.state.statusmessage}</span>
         <hr/>
           <div className="form-group">
           <label forName="email">Usename:</label>
               <input type="text"  className="form-control" name="username" onChange={this.updateData}/>
           </div>   
           <div className="form-group">
                <label forName="pwd">Password:</label>
               <input type="password" className="form-control" name="password" onChange={this.updateData}/>
           </div>

             <div className="form-group">
                <label forName="email">Email:</label>
               <input type="email" className="form-control" name="email"/>
           </div>

           <div className="form-group">
                <label forName="photo">Photo:</label>
               <input type="text" className="form-control" name="photo"/>
           </div>

           <div className="form-group">
                <label forName="email">Gender:</label>
               <select className="form-control" name="gender">
                  <option>MALE</option>
                  <option>FEMALE</option>
               </select>

           </div>

           <button type="submit" onClick={this.authUser} className="btn btn-primary">Sign Up</button>
            &nbsp;&nbsp;&nbsp;
           <br/><br/><br/><br/><br/><br/>
     </div>
     </div>
   
    )
  }
}

export default SignUp;
