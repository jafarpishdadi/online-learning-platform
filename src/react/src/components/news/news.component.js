import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
<<<<<<< Updated upstream
import pic from '../../assets/change.png'
=======
>>>>>>> Stashed changes
import './news.css'


class News extends Component {
    render() {
        return (
            <Card className="classCardStyle overflow-auto">
            <Card.Body>
                <Card.Title className="classCardTitleStyle">News</Card.Title>
            <div class="tabs">
                <input name="tabs" type="radio" id="tab-1" checked="checked" class="input" />
                <label for="tab-1" class="label">Course Related</label>
                
                <div class="panel">
                    <h1>Course Related</h1>
                    <p>News that is related to courses will appear here</p>
                    <div className="btn-learn">
  		            <button className="btn-learn-more">Learn More</button>
		            </div>
                </div>
                

                <input name="tabs" type="radio" id="tab-2" class="input" />
                <label for="tab-2" class="label">Social initiative</label>
                <div class="panel">
                    <h1>Social initiative</h1>
                    <p>News that is related to Social Initiatives will appear here</p>
                    <div className="btn-learn">
  		            <button className="btn-learn-more">Learn More</button>
		            </div>
                </div>

                <input name="tabs" type="radio" id="tab-3" class="input" />
                <label for="tab-3" class="label">Today's Popular Topics</label>
                <div class="panel">
                    <h1>Popular Topics</h1>
                    <p> News that is related to popular topics will appear here</p>
                    <div className="btn-learn">
  		            <button className="btn-learn-more">Learn More</button>
		            </div>
                </div>

                <input name="tabs" type="radio" id="tab-4" class="input" />
                <label for="tab-4" class="label">Other</label>
                <div class="panel">
                    <h1>Other</h1>
                    <p> News that is related to other topics will appear here</p>
                    <div className="btn-learn">
  		            <button className="btn-learn-more">Learn More</button>
		            </div>
                </div>
            </div>
            </Card.Body>
    <div class = 'square'></div>
    </Card>
        );
    }
}
export default News;