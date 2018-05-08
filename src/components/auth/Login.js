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
         this.setState({statusmessage:result.data.message});
       });
    }  
   

  render() {
      //defining inline css
      const inlinecss={
        height:"200px"
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
           <button type="submit" onClick={this.login} className="btn btn-warning">Forget Password</button>
           <br/><br/><br/><br/><br/><br/>
     </div>
     </div>
    )
  }
}

export default Login;
