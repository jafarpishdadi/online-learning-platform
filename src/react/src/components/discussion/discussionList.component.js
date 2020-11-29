import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './discussionList.css'

class DiscussionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        var divStyle = {
            margin: "1%",
            border: "2px solid black",
            borderRadius: "5px",
            width: "75vw"
          };
        return(
            <div className = 'discussion-list-container'>
                <div style = {{margin: "1%"}}>
                    Discussion Thread: 
                    <span>
                        <button>Create Thread</button>
                    </span>
                </div>
                <div className = 'discussion-list-list'>
                    <button style = {divStyle}>
                        <div style = {{marginLeft: "20px"}}>
                            Title
                        </div>
                        <div>
                            <span>Replies</span>
                            <span>Date</span>
                        </div>
                    </button>
                    <button style = {divStyle}>
                        <div style = {{marginLeft: "20px"}}>
                            Title
                        </div>
                        <div>
                            <span>Replies</span>
                            <span>Date</span>
                        </div>
                    </button>
                    <button style = {divStyle}>
                        <div style = {{marginLeft: "20px"}}>
                            Title
                        </div>
                        <div>
                            <span>Replies</span>
                            <span>Date</span>
                        </div>
                    </button>
                </div>
                
            </div>
            )
        }
}
export default DiscussionList
