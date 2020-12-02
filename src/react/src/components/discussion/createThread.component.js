import React, { Component } from 'react'
import './createThread.css'

class CreateThread extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    // handleClick = () => {
    //     this.props.toggle();
    // };
    render() {
        return(
            <div className = 'thread'>
                <div className = 'thread_content'>
                    Hello world
                </div>
            </div>
        )
    }
}
export default CreateThread
