import React, { Component } from 'react'
import './discussionDetail.css'
import CreateReply from './createReply.component.js'
import axios from 'axios';

class DiscussionDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newReply : false,
            replies: []
        }
    }
    componentDidMount() {
        var resReply = {};
        var reply = [];
        axios.post('http://127.0.0.1:8103/api/db_get_threads_id')
            .then(response => {
                console.log(response.data);
                for (var i = 0; i < response.data.length; i++){
                    // resThread['id'] = response.data[i]._id;
                    // resThread['title'] = response.data[i].title;
                    // resThread['replies'] = response.data[i].bodies.length - 1;
                    // resThread['date'] = response.data[i].timestamps[0];
                    reply[i] = JSON.parse(JSON.stringify(resReply));
                }
                console.log(reply);
                this.setState({replies: reply})
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
        return(
            <div className = 'discussion-detail-container'>
                <div style = {{margin: "1%"}}>
                    Replies: 
                    <span>
                        <button onClick = {this.createReplyToggle}>
                            {this.state.newReply ? 'Cancel' : 'CreateReply'}
                        </button>
                    </span>
                </div>
                {this.state.newReply ? <CreateReply/> : null}
                <div className = 'discussion-detail-list'>
                    {this.state.replies.map(
                        (reply) => 
                            <div>
                                Hello
                            </div>
                    )}
                </div>
                {/* <button key = {reply.id} style = {divStyle}>
                    <div style = {{marginLeft: "20px"}}>
                        Title: {reply.title}
                    </div>
                    <div>
                        <span>Replies: {thread.replies}</span>
                        <span>Date: {thread.date}</span>
                    </div>
                </button>
                <div>
                    Hello
                </div> */}
            </div>
            )
        }
}
export default DiscussionDetail
