import React, { Component } from 'react'
import './Login.css';
import loginIcon from '../../img/affiliates.png';
import axios from 'axios';

/**
 * Every component has states 
 */
class Login extends Component {
   
    constructor(props){
        super(props);
        this.state={username:"",password:"",statusmessage:""};
    }

    //input- e.target.value
    //input- e.target.name
    updateData = (e) => {
        const pstate = this.state;
        pstate[e.target.name] = e.target.value;
        //update the state
        this.setState({pstate});
      }
  
   authUser=()=>{
       console.log(this.state.username);
       console.log(this.state.password);
       var user={username:this.state.username,password:this.state.password};
       axios.post('http://localhost:444/v1/auth', user)
       .then((result) => {
         console.log(result.data.message);
         //this.state.statusmessage=result.data.message
         this.setState({statusmessage:result.data.message});
       });
    }  

    emailPassword=()=>{
        console.log(this.state.username);
        var user={username:this.state.username};
        axios.post('http://localhost:444/v1/forget-password', user)
        .then((result) => {
          console.log(result.data.message);
          //this.state.statusmessage=result.data.message
          this.setState({statusmessage:result.data.message});
        });
     }  
 

    
   

  render() {
      //defining inline css
      const inlinecss={
        height:"60px"
    }
    return (
        <div className="container">
         
        <div className="login">
        <img src={loginIcon} style={inlinecss} alt=""/>
         <hr/>
         <span className="error-message">{this.state.statusmessage}</span>
         <hr/>
           <div className="form-group">
           <label forName="email">Usename:</label>
               <input type="text"  className="form-control" name="username" onChange={this.updateData}/>
           </div>   
           <div className="form-group">
                <label forName="pwd">Password:</label>
               <input type="password" class="form-control" name="password" onChange={this.updateData}/>
           </div>

           <button type="submit" onClick={this.authUser} className="btn btn-primary">Submit</button>
            &nbsp;&nbsp;&nbsp;
           <button type="submit" onClick={this.emailPassword} className="btn btn-warning">Forget Password</button>
          
     </div>
       <hr/> 
      <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>            
  <table class="table table-bordered" >
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        <td>
            <button type="submit" className="btn btn-primary btn-sm">Delete</button>
            &nbsp; 
            <button type="submit" className="btn btn-danger btn-sm">Edit</button>
            </td>
        
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td>
            <button type="submit" className="btn btn-primary btn-sm">Delete</button>
            &nbsp; 
            <button type="submit" className="btn btn-danger btn-sm">Edit</button>
            </td>
        
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td>
            <button type="submit" className="btn btn-primary btn-sm">Delete</button>
             &nbsp; 
            <button type="submit" className="btn btn-danger btn-sm">Edit</button>
            </td>
        
      </tr>
    </tbody>
  </table>
     </div>
    )
  }
}

export default Login;
