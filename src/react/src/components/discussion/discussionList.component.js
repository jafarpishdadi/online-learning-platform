import React, { Component } from 'react'
import './discussionList.css'
import CreateThread from './createThread.component.js'
import axios from 'axios';
import { Link } from 'react-router-dom';

class DiscussionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newThread : false,
            threads: []
        }
    }
    componentDidMount() {
        var resThread = {};
        var thread = [];
        axios.get('http://127.0.0.1:8103/api/db_get_all_threads')
            .then(response => {
                console.log(response.data);
                for (var i = 0; i < response.data.length; i++){
                    resThread['id'] = response.data[i]._id;
                    resThread['title'] = response.data[i].title;
                    resThread['replies'] = response.data[i].bodies.length - 1;
                    resThread['date'] = response.data[i].timestamps[0];
                    thread[i] = JSON.parse(JSON.stringify(resThread));
                }
                console.log(thread);
                this.setState({threads: thread})
            })
			.catch((error) => {
			console.log(error)
        });
    }
    createThreadToggle = () => {
        this.setState({
            newThread: !this.state.newThread
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
            <div className = 'discussion-list-container'>
                <div style = {{margin: "1%"}}>
                    Discussion Threads: 
                    <span>
                        <button onClick = {this.createThreadToggle}>
                            {this.state.newThread ? 'Cancel' : 'Create Thread'}
                        </button>
                    </span>
                </div>
                {this.state.newThread ? <CreateThread/> : null}
                <div className = 'discussion-list-list'>
                    {this.state.threads.map(
                        (thread) => 
                            <div key = {thread.id} style = {divStyle}>
                                <Link to = {'/discussionDetail/'.concat(thread.id)} style = {{color: 'black'}}>
                                    <div style = {{marginLeft: "20px"}}>
                                        Title: {thread.title}
                                    </div>
                                    <div>
                                        <span>Replies: {thread.replies}</span>
                                        <span>Date: {thread.date}</span>
                                    </div>
                                </Link>
                            </div>
                            
                    )}
                    
                </div>
                
            </div>
            )
        }
}
export default DiscussionList
