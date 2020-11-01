import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import fb from '../../assets/fb.png'
import li from '../../assets/li.png'
import profilePic from '../../assets/profilePic.png'
import up from '../../assets/up.png'
import edit from '../../assets/edit.png'
import del from '../../assets/del.png'
import editButton from '../../assets/editButton.png'
import './profile.css'
import ColourText from './colourText.component.js'

let educations = [
    {id:1, text: "University of Toronto Scarbrough Undergraduate"},
    {id:2, text: "Demo element 2"},
    {id:3, text: "Demo element 3"}
]
let skills = [
    {id:1, text: "Demo element 1"},
    {id:2, text: "Demo element 2"},
    {id:3, text: "Demo element 3"},
    {id:4, text: "Demo element 4"}
]
let completedCourses = [
    {id:1, text: "Demo element 1"},
    {id:2, text: "Demo element 2"}
]
let languages = [
    {id:1, text: "English (Native)"},
    {id:3, text: "French (Second)"}
]

class Profile extends Component {
    
	render() {
		return(
            <div className="main">
                {/* card with education info */}
                <Card className = "edu">
                    <Card.Body>
                        <Card.Title className = "person">
                            <div className = "picture">
                                <img src={profilePic} className="picturePic"/>
                            </div>
                            <div className = "name_and_date">
                                <div className = "name">Lingfeng Su</div>
                                <div className = "date">Established: August 2020</div>
                            </div>
                            <button className = "edit">edit</button>
                        </Card.Title>
                        <hr className = "divider"></hr>

                        <Card.Title className = "listed_titles">Education</Card.Title>
                        <Card.Text className = "listed_educations">
                            <ColourText textInfo = {educations}/>
                        </Card.Text>

                        <Card.Title className = "listed_titles">Skills</Card.Title>
                        <Card.Text className = "listed_skills">
                            <ColourText textInfo = {skills}/>
                        </Card.Text>

                        <Card.Title className = "listed_titles">Completed course</Card.Title>
                        <Card.Text className = "listed_courses">
                            <ColourText textInfo = {completedCourses}/>
                        </Card.Text>

                        <Card.Title className = "listed_titles">Languages</Card.Title>
                        <Card.Text className = "listed_languages">
                            <ColourText textInfo = {languages}/>
                        </Card.Text>

                        <Card.Title className = "listed_titles">Description</Card.Title>
                        <Card.Text className = "listed_bodies">
                            According to all known laws of aviation,
                            there is no way a bee
                            should be able to fly.
                            Its wings are too small to get
                            its fat little body off the ground.
                            The bee, of course, flies anyway
                            because bees don't care
                            what humans think is impossible.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <div className = "padding"></div>

                {/* card with personal info */}
                <Card className = "info">
                    <Card.Title className = "info_title">Personal Information</Card.Title>
                    <div className = "top">
                        <Card.Body>
                            <Card.Title className = "title">First Name</Card.Title>
                            <Card.Text className = "body">Ling</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title className = "title">Last Name</Card.Title>
                            <Card.Text className = "body">Su</Card.Text>
                        </Card.Body>
                    </div>
                    <div className = "bottom">
                        <Card.Body>
                            <Card.Title className = "title">Registered Email Address</Card.Title>
                            <Card.Text className = "body">Ling.Su@mail.utoronto.ca</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title className = "title">Registered Phone Number</Card.Title>
                            <Card.Text className = "body">416-731-9960</Card.Text>
                        </Card.Body>
                    </div>
                    <div className = "pic_and_account_top">
                        <div className = "pic">
                            <Card.Body>
                                <Card.Title className = "title">Picture</Card.Title>
                            </Card.Body>
                        </div>
                        <div className = "linked">
                            <Card.Body>
                                <Card.Title className = "title">Linked Accounts</Card.Title>
                            </Card.Body>
                        </div>
                    </div>
                    <div className = "pic_and_account_bottom">
                        <div className = "pic">
                            <div className = "profile_pic_slot">
                                <img src={profilePic} className="elementPic"/>
                            </div>
                            <div className = "spacer"></div>
                            <div className = "edit_slot">
                                <img src={up} className="element"/>
                                <img src={edit} className="element"/>
                                <img src={del} className="element"/>
                            </div>
                        </div>
                        <div className = "linked">
                            <div className = "linked_pics">
                                <img src={fb} className="element_image"/>
                                <img src={li} className="element_image"/>
                            </div>
                        </div>
                    </div>
                    <img src={editButton} className="edit_button"/>
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