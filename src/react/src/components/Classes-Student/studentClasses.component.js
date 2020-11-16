import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import './studentClasses.css'


class Studentclasses extends Component {
	state = {
		redirect: false,
		component:'',
		courses:[]

	  }
	  listRedirect = () => {
		this.setState({
		  redirect: true,
		  component:'seeAll'
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
				return <Redirect to='/enrollclass' />
			}
			else if(this.state.component == "seeAll"){
				return <Redirect to='/allclasslist' />
			}
	  }
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
	<Card className="ClassCardStyle overflow-auto">
	<Card.Body>
		<Card.Title className="classCardTitleStyle">Classes</Card.Title>
        <div className="ml-auto">
		{this.renderRedirect()}
  		<button className="btn btn-see-all pull-right"onClick={this.listRedirect}>See All</button>
		</div>
		{ this.state.courses.map(courses =>
                    <Card className='courseCards' bg="light" text="black" style={{ height:'14rem', width: '25rem' }}>
                        <Card.Header className='instructorHeader' style={{height:'10rem', color:'white',background:'black' }}></Card.Header>
                        <div class="numberCircle"></div>
                        <div class="titleCircle">{courses.course_instructor}</div>
                        <Card.Body>
                            <Card.Title>{courses.course_name}</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
		<button className="btn btn-event "onClick={this.classRedirect}>Enroll Courses</button>
	</Card.Body>
    <div class = 'square'></div>
    </Card>



        );
    }
}
export default Studentclasses;