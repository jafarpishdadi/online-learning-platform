import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import change from '../../assets/change.png'
import book from '../../assets/open-book.png'
import computer from '../../assets/computer.png'
import logo from '../../assets/uimpactify-logo.png'
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
                            <h1>New courses have been added!</h1>
                            <img class="textbox" src={book} ></img>
                            <p> Check out the newly added courses in the classes section</p>
                            <div className="btn-learn">
                            <button className="btn-learn-more"><a href="http://localhost:3000/allclasslist">view courses</a></button>
                            </div>
                        </div>


                        <input name="tabs" type="radio" id="tab-2" class="input" />
                        <label for="tab-2" class="label">Social initiative</label>
                        <div class="panel">
                            <h1>CFC launches new campaign</h1>
                            <div className="picture-cfc">
                                <img class="textbox" src={change} ></img>
                                <p>Technology for improved education Guatemela is a project designed to improve the quality of eduction in Guatemala</p>
                            </div>
                            <div className="btn-learn">
                                <button className="btn-learn-more">Learn More</button>
                            </div>
                        </div>

                        <input name="tabs" type="radio" id="tab-3" class="input" />
                        <label for="tab-3" class="label">Today's Popular Topics</label>
                        <div class="panel">
                        <h1>AI system discovers new useful material</h1>
                            <img class="textbox" src={computer} ></img>
                            <p>an AI algorithm called CAMEO that discovered a potentially useful new material</p>
                            <div className="btn-learn">
                                <button className="btn-learn-more"><a href="https://www.sciencedaily.com/releases/2020/11/201124092150.htm">learn more</a></button>
                            </div>
                        </div>

                        <input name="tabs" type="radio" id="tab-4" class="input" />
                        <label for="tab-4" class="label">Other</label>
                        <div class="panel">
                        <h1>Want to know more about UImpactify</h1>
                            <img class="textbox" src={logo} ></img>
                            <p>learn more about UImpactify!</p>
                            <div className="btn-learn">
                                <button className="btn-learn-more"><a href="http://localhost:3000/faq">learn more</a></button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
                <div class='square'></div>
            </Card>
        );
    }
}
export default News;