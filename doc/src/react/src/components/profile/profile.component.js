import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import './profile.css'

class Profile extends Component {
	render() {
		return(
            <div className="main">
                {/* card with education info */}
                <Card className = "edu" style={{
                    width: '200px',
                    }}>
                    <Card.Body>Text boi</Card.Body>
                </Card>
                {/* card with personal info */}
                <Card className = "info" style={{
                    width: '200px',
                    }}>
                    <Card.Body>Text boi23</Card.Body>
                </Card>
            </div>
			// <div className="info">
            //     <h1>
            //         Hello world
            //     </h1>
            // </div>
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