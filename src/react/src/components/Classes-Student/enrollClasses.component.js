import React, { Component } from 'react'
import ReactDOM from "react-dom";
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import './enrollClass.css'
import Modal from '../popUpClasses/Modal.js'
import gradhat from '../../assets/gradhat.png'
import youtube from '../../assets/youtube.png'
import pen from '../../assets/pen.png'

class AllClassList extends Component {
    

        state = {
        courses: [],
        show:false,
        clicked_course:"",
        clicked_name:"",
        clicked_info:""
        };
        
    showModal = (clicked_course) => {
      this.setState({ show: true });
      localStorage.setItem('course_name', (this.state.clicked_course))
      localStorage.setItem('instructor_name', (this.state.clicked_name))
      localStorage.setItem('extra_info', (this.state.clicked_info))
      console.log(this.state.clicked_course)
      console.log(this.state.clicked_name)
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

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
                <Modal show={this.state.show} handleClose={this.hideModal}></Modal>
                <h1>Course List</h1>
                { this.state.courses.map(courses =>
                    <Card className='courseCards'  bg="light" text="black" style={{ height:'16rem', width: '25rem' }} name='course_name' value={courses.course_name}>
                        <Card.Header className='instructorHeader' style={{height:'9rem', color:'white',background:'black' } }></Card.Header>
                        <div class="numberCircle2" ></div>
                        <div class="titleCircle">{courses.course_instructor}</div>
                        <Card.Body>                                          
                            <Card.Title className = 'courseNameCard'>{courses.course_name}</Card.Title>
                            <Card.Text>
                            <div  className='extraInfo'>{courses.extra_info}</div>
                            <div class="card-img-top d-flex align-items-center bg-light">
                                <div>
                                <img src={gradhat} className="cardIcon" />
                                </div>
                                <p2 class="col p-2 m-0">12 units</p2>
                                <div>
                                <img src={pen} className="cardIcon" />
                                </div>
                                <p2 class="col p-2 m-0">12 tasks</p2>
                                <div>
                                <img src={youtube} className="cardIcon" />
                                </div>
                                <p2 class="col p-2 m-0">2 hours</p2>
                                <button type="button" class="btn btn-primary2"  onClick={() => this.setState({clicked_course: courses.course_name, clicked_name:courses.course_instructor, clicked_info: courses.extra_info}) }>Select</button>
                                <button type="button" class="btn btn-primary2"  onClick={this.showModal}>Enroll</button>
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