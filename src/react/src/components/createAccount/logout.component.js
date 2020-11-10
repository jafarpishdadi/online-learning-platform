import React, { Component } from 'react';

class Logout extends Component {

    componentDidMount(){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    }

 
  render() {

    return (
          <div className='App'>
            
           <p>You are logged out!</p>

          </div>
    );
  }

  
}

export default Logout;