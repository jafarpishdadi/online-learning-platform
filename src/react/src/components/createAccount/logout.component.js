import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Logout extends Component {

    componentDidMount(){
        localStorage.removeItem('token')
        localStorage.removeItem('username')

    }

 
  render() {
    return (
       <Redirect to='/login' />
    );
  }

  
}

export default Logout;