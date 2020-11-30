import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './discussionList.css'

let threads = [
    {id: 1, title: "Title 1", replies: 0, date: "Soon" },
    {id: 2, title: "Title 2", replies: 1, date: "Soon" },
    {id: 3, title: "Title 3", replies: 2, date: "Soon" },   
    ]

class DiscussionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newThread : false
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
                    Discussion Threads: 
                    <span>
                        <button>Create Thread</button>
                    </span>
                </div>
                <div className = 'discussion-list-list'>
                    {threads.map(
                        (thread) => 
                            <button key = {thread.id} style = {divStyle}>
                                <div style = {{marginLeft: "20px"}}>
                                    {thread.title}
                                </div>
                                <div>
                                    <span>{thread.replies}</span>
                                    <span>{thread.date}</span>
                                </div>
                            </button>
                    )}
                    
                </div>
                
            </div>
            )
        }
}
export default DiscussionList
