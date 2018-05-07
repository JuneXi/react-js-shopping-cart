import React, { Component } from 'react'

import profileimg from '../../img/profile.png';

/**
 * 
 */
 class Greeting extends Component {

    
  render() {
    const title={
        display:"inline"
      };   
    return (
        <React.Fragment>
              <h2 className="Greeting-title" style={title}>Hello Mr. Nagendra</h2>
             <img src={profileimg} className="profile-img" alt="profile pic"/> 
         </React.Fragment>
    )
  }
}

export default Greeting;
