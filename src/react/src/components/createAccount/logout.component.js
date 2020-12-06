import React, { Component } from 'react';

class Logout extends Component {

    componentDidMount(){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    }

 
  render() {

    return (
          <div className="App">
            
           <p>You are logged out!</p>
           <a href="http://localhost:3000/login">Visit Home</a>
          </div>
    );
  }

  
}

export default Logout;