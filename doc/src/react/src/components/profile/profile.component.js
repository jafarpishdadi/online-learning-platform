import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import './profile.css'

class Profile extends Component {
	render() {
		return(
            <div className="main">
                {/* card with education info */}
                <Card className = "edu">
                    <Card.Body>
                        <Card.Title className = "person">
                            <div className = "picture">ello</div>
                            <div className = "name_and_date">
                                <div>joe</div>
                                <div>2020 lul</div>
                            </div>
                            <button className = "edit">edit</button>
                        </Card.Title>
                        <hr className = "divider"></hr>
                        <Card.Title className = "education">Education</Card.Title>
                        <Card.Text>UofT</Card.Text>
                        <Card.Title className = "skills">Skills </Card.Title>
                        <Card.Text>LMAO</Card.Text>
                        <Card.Title className = "completed_course">Completed course</Card.Title>
                        <Card.Text>CSCC01</Card.Text>
                        <Card.Title className = "languages">Languages</Card.Title>
                        <Card.Text>English</Card.Text>
                        <Card.Title className = "description">Description</Card.Title>
                        <Card.Text>Being bad at programming</Card.Text>
                    </Card.Body>
                </Card>

                <div className = "padding"></div>

                {/* card with personal info */}
                <Card className = "info">
                    <Card.Title className = "info_title">PERSONAL INFO</Card.Title>
                    <div className = "top">
                        <Card.Body>
                            <Card.Title>First Name</Card.Title>
                            <Card.Text>Ling</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Last Name</Card.Title>
                            <Card.Text>Su</Card.Text>
                        </Card.Body>
                    </div>
                    <div className = "bottom">
                        <Card.Body>
                            <Card.Title>Registered Email Address</Card.Title>
                            <Card.Text>Ling.Su@mail.utoronto.ca</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Registered Phone Number</Card.Title>
                            <Card.Text>416-731-9960</Card.Text>
                        </Card.Body>
                    </div>
                    
                </Card>
            </div>
            //make a flex box set into a row
            //with in the flex box have 2 card components. Use hardcoded data while designing
            //once everything is set-up use props and feed it dummy data from index.js
            //ignore the images for now, empty circle or something would be fine
            //leave skills and completed courses blank and just try to build base components
            //inline tags like, line 9 p-0, means padding 0. ml-5 margin left 5. 
            //search up bootstrap inline display property/blocks. 
		)
	}
}
export default Profile