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

// Very helpful code below to make edit button work: 
// {this.state.editing ? (
//     <span className="birth-year">{birthYear}</span>
//   ) : (
//     <input
//       type="text"
//       defaultValue={birthYear}
//       ref={node => {
//         this.newbirthYear = node;
//       }}
//     />
//   )}

{/* <p>
<span>Homeworld:</span>
{this.state.editing ? (
    <span className="home-world">{homeWorld}</span>
) : (
    <input
    type="text"
    defaultValue={homeWorld}
    ref={node => {
        this.newHomeWorld = node;
    }}
    />
)}
</p>
<div align="center">
<button
    onClick={() => {
    this.setState({ editing: true });
    }}
>
    Edit
</button>
</div> */}

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
    }
	render() {
        const { educations } = this.props
        const { skills } = this.props
        const { completedCourses } = this.props
        const { languages } = this.props
        const { description } = this.props
        const { name } = this.props
        const { timeJoin } = this.props
        const { firstName } = this.props
        const { lastName } = this.props
        const { email } = this.props
        const { phoneNumber } = this.props
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
                                <div className = "name">{ name }</div>
                                <div className = "date">Established: { timeJoin }</div>
                            </div>
                            <button className = "edit">edit</button>
                        </Card.Title>
                        <hr className = "divider"></hr>

                        <Card.Title className = "listed_titles">Education</Card.Title>
                        <Card.Text className = "listed_educations">
                            <ColourText textInfo = { educations }/>
                        </Card.Text>

                        <Card.Title className = "listed_titles">Skills</Card.Title>
                        <Card.Text className = "listed_skills">
                            <ColourText textInfo = { skills }/>
                        </Card.Text>

                        <Card.Title className = "listed_titles">Completed course</Card.Title>
                        <Card.Text className = "listed_courses">
                            <ColourText textInfo = { completedCourses }/>
                        </Card.Text>

                        <Card.Title className = "listed_titles">Languages</Card.Title>
                        <Card.Text className = "listed_languages">
                            <ColourText textInfo = { languages }/>
                        </Card.Text>

                        <Card.Title className = "listed_titles">Description</Card.Title>
                        <Card.Text className = "listed_bodies">{ description }</Card.Text>
                    </Card.Body>
                </Card>

                <div className = "padding"></div>

                {/* card with personal info */}
                <Card className = "info">
                    <Card.Title className = "info_title">Personal Information</Card.Title>
                    <div className = "top">
                        <Card.Body>
                            <Card.Title className = "title">First Name</Card.Title>
                            <Card.Text className = "body">{ firstName }</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title className = "title">Last Name</Card.Title>
                            <Card.Text className = "body">{ lastName }</Card.Text>
                        </Card.Body>
                    </div>
                    <div className = "bottom">
                        <Card.Body>
                            <Card.Title className = "title">Registered Email Address</Card.Title>
                            <Card.Text className = "body">{ email }</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title className = "title">Registered Phone Number</Card.Title>
                            <Card.Text className = "body">{ phoneNumber }</Card.Text>
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
                                {/* <img src={up} className="element"/>
                                <img src={edit} className="element"/>
                                <img src={del} className="element"/> */}
                                <button className = "element_button">Upload</button>
                                <button className = "element_button">Edit</button>
                                <button className = "element_button">Delete</button>
                            </div>
                        </div>
                        <div className = "linked">
                            <div className = "linked_pics">
                                <button className = "invis_button">
                                    <img src={fb} className="element_image"/>
                                </button>
                                <button className = "invis_button">
                                    <img src={li} className="element_image"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className = "edit_button">Edit</button>
                </Card>
            </div>
		)
	}
}
export default Profile
