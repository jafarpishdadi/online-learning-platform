import React, { Component } from 'react'
import './discussionDetail.css'
import CreateReply from './createReply.component.js'
import axios from 'axios';

class DiscussionDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newReply : false,
            replies: [{'bodies': '', 'timestamps': '', 'users': ''}],
            title: "",
            handle: this.props.handle,
        }
    }
    componentDidMount() {
        var resReply = {};
        var reply = [];
        axios.post('http://127.0.0.1:8103/api/db_get_thread_id', {'_id': this.state.handle})
            .then(response => {
                console.log(response.data);
                for (var i = 0; i < response.data.bodies.length; i++){
                    resReply['bodies'] = response.data.bodies[i];
                    resReply['timestamps'] = response.data.timestamps[i];
                    resReply['users'] = response.data.users[i];
                    reply[i] = JSON.parse(JSON.stringify(resReply));
                }
                console.log(reply);
                this.setState({replies: reply, title: response.data.title})
            })
			.catch((error) => {
			console.log(error)
        });
    }
    createReplyToggle = () => {
        this.setState({
            newReply: !this.state.newReply
        });

    };
    render() {
        var divStyle = {
            margin: "1%",
            border: "2px solid black",
            borderRadius: "5px",
            width: "75vw"
          };
        console.log(this.state.replies)
        return(
            <div className = 'discussion-detail-container'>
                <h3 style = {{margin: "1%"}}>
                    Title: {this.state.title}
                </h3>
                <div>
                    <span>
                        Author: {this.state.replies[0].users}
                    </span>
                    <span>
                        Date: {this.state.replies[0].timestamps}
                    </span>
                    <div style = {{marginLeft: "1%"}}>
                        Body:
                    </div>
                    <div style = {{marginLeft: "1%", marginRight: "1%", padding: "10px", 
                                    border: "2px solid grey", borderRadius: "5px"}}>
                        {this.state.replies[0].bodies}
                    </div>
                </div>
                <hr></hr>
                <div style = {{margin: "1%"}}>
                    Replies: 
                    <span>
                        <button onClick = {this.createReplyToggle}>
                            {this.state.newReply ? 'Cancel' : 'Create Reply'}
                        </button>
                    </span>
                </div>
                <hr></hr>
                {this.state.newReply ? <CreateReply _id = {this.state.handle}/> : null}
                <div className = 'discussion-detail-list'>
                    {this.state.replies.slice(1).map(
                        (reply) => 
                            <div style = {{divStyle}}>
                                <span>Author: {reply.users}</span>
                                <span>Date: {reply.timestamps}</span>
                                <div style = {{marginLeft: "1%"}}>
                                    Body:
                                </div>
                                <div style = {{marginLeft: "1%", marginRight: "1%", padding: "10px", 
                                    border: "2px solid grey", borderRadius: "5px"}}>{reply.bodies}</div>
                                <hr></hr>
                            </div>
                    )}
                </div>
            </div>
            )
        }
}
export default DiscussionDetail
