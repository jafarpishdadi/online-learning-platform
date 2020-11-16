import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import './enrollClass.css'
import gradhat from '../../assets/gradhat.png'
import youtube from '../../assets/youtube.png'
import pen from '../../assets/pen.png'

class AllClassList extends Component {
    state = {
        courses: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8103/api/get_all_courses`)
            .then(res => {
                const courses = res.data;
                this.setState({ courses });
            })
    }

    render() {
        return (
            <div>
                <h1>Course List</h1>
                { this.state.courses.map(courses =>
                    <Card className='courseCards' bg="light" text="black" style={{ height:'14rem', width: '25rem' }}>
                        <Card.Header className='instructorHeader' style={{height:'10rem', color:'white',background:'black' }}></Card.Header>
                        <div class="numberCircle"></div>
                        <div class="titleCircle">{courses.course_instructor}</div>
                        <Card.Body>
                            <Card.Title>{courses.course_name}</Card.Title>
                            <Card.Text>
                            <div class="card-img-top d-flex align-items-center bg-light">
                                <div>
                                <img src={gradhat} className="cardIcon" />
                                </div>
                                <p class="col p-2 m-0">12 lessons</p>
                                <div>
                                <img src={pen} className="cardIcon" />
                                </div>
                                <p class="col p-2 m-0">12 tasks</p>
                                <div>
                                <img src={youtube} className="cardIcon" />
                                </div>
                                <p class="col p-2 m-0">2 hours</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        )
    }
}
export default AllClassList