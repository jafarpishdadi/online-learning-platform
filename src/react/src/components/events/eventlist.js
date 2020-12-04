import React, { Component } from 'react'
import ReactDOM from "react-dom";
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import './eventlist.css'
import Modal from '../popUpEvents/Modal.js'
import gradhat from '../../assets/gradhat.png'
import youtube from '../../assets/youtube.png'
import pen from '../../assets/pen.png'

class AllEventsList extends Component {
    

    state = {
        courses: [],
        show:false,
        clicked_course:"",
        clicked_name:""
        
        };
        
    showModal = (clicked_course) => {
      this.setState({ show: true });
      localStorage.setItem('dashevent_name', (this.state.clicked_course))
      localStorage.setItem('dashevent_instructor', (this.state.clicked_name))
      console.log(this.state.clicked_course)
      console.log(this.state.clicked_name)
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

    componentDidMount() {
        axios.get(`http://127.0.0.1:8103/api/get_all_dashevents`)
            .then(res => {
                const courses = res.data;
                this.setState({ courses });
            })
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal}></Modal>
                <h1>All Events</h1>
                { this.state.courses.map(courses =>
                    <Card className='courseCards'  bg="light" text="black" style={{ height:'17rem', width: '25rem' }} name='course_name' value={courses.dashevent_name}>
                        <Card.Header className='eventHeader' style={{height:'10rem', color:'white',background:'black' } }></Card.Header>
                        <div class="numberCircle" ></div>
                        <div class="titleCircle">{courses.dashevent_name}</div>
                        <Card.Body style={{height:'10rem', width:  '18rem', color:'white'} }>
                        <div className = 'buttons'>
                            <button type="button" class="btn btn-primary3"  onClick={() => this.setState({clicked_course: courses.dashevent_name, clicked_name:courses.extra_info}) }>Select</button>
                                <button type="button" class="btn btn-primary3"  onClick={this.showModal}>Join</button>
                            </div>                                          
                            <p>{courses.extra_info}</p>
                        </Card.Body>
                    </Card>
                )}

            </div>
        )
    }
}
export default AllEventsList