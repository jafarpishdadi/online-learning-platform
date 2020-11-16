import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import './yourClasses.css'
import gradhat from '../../assets/gradhat.png'
import youtube from '../../assets/youtube.png'
import pen from '../../assets/pen.png'
import {Redirect} from 'react-router-dom'

class Classes extends Component {
    state = {
        courses: []
    }

    componentDidMount() {
		axios.post(`http://127.0.0.1:8103/api/db_get_courses_of_student`,{'student': localStorage.getItem('username')} )
            .then(res => {
                const courses = res.data;
				this.setState({ courses });
				console.log(localStorage.getItem('username'))
            })
	}

	classRedirect = () => {
		this.setState({
		  redirect: true,
		  component:'class'
		})
	  }

	renderRedirect = () => {
		if (this.state.redirect)  {
			if (this.state.component == "class"){
				return <Redirect to='/allclassList' />
			}
		}
	}

    render() {
        return (
            <div>
                <h1>Your Courses</h1>
				<div>
				{ this.state.courses.map(courses =>
                    <Card className='courseCards' bg="light" text="black" style={{ height:'14rem', width: '14rem' }}>
						{this.renderRedirect()}
                        <Card.Header className='instructorClassHeader' style={{height:'10rem', color:'white',background:'black' }}></Card.Header>
                        <Card.Body>
                            <Card.Title>{courses}</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
				</div>
				<button className="btn btn-e"onClick={this.classRedirect}>Add A New Course</button>
            </div>
        )
    }
}
export default Classes