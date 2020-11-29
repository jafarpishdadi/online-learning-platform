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


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displaying : true,
            
        }
        this.newFirstName = React.createRef();
        this.newLastName = React.createRef();
        this.newPhoneNumber = React.createRef();
        this.newName = React.createRef();
        this.newDescription = React.createRef();
        this.submit = this.submit.bind(this);
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
            <form className="main" id='my-form' onSubmit={(e) => this.submit(e, description, 
                                                            name, firstName, lastName, phoneNumber)}>
                {/* card with education info */}
                <Card className = "edu">
                    <Card.Body>
                        {this.state.displaying ? (
                            <div className = "name">{ name }</div>
                        ) : (
                            <input
                            className = "name"
                            type="text"
                            defaultValue={name}
                            ref={this.newName}
                            />
                        )}
                        <div className = "date">Established: { timeJoin }</div>
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
                        {this.state.displaying ? (
                            <Card.Text className = "listed_bodies">{ description }</Card.Text>
                        ) : (
                            <input
                            className = "description"
                            type="text"
                            defaultValue={description}
                            ref={this.newDescription}
                            />
                        )}
                    </Card.Body>
                </Card>

                <div className = "padding"></div>

                {/* card with personal info */}
                <Card className = "info">
                    <Card.Title className = "info_title">Personal Information</Card.Title>
                    <div className = "top">
                        <Card.Body>
                            <Card.Title className = "title">First Name</Card.Title>
                            {this.state.displaying ? (
                                <Card.Text className = "body">{ firstName }</Card.Text>
                            ) : (
                                <input
                                className = "body"
                                type="text"
                                defaultValue={firstName}
                                ref={this.newFirstName}
                                />
                            )}
                        </Card.Body>
                        <Card.Body>
                            <Card.Title className = "title">Last Name</Card.Title>
                            {this.state.displaying ? (
                                <Card.Text className = "body">{ lastName }</Card.Text>
                            ) : (
                                <input
                                className = "body"
                                type="text"
                                defaultValue={lastName}
                                ref={this.newLastName}
                                />
                            )}
                        </Card.Body>
                    </div>
                    <div className = "bottom">
                        <Card.Body style = {{flex: 1}}>
                            <Card.Title className = "title">Registered Email Address</Card.Title>
                            <Card.Text className = "body">{ email }</Card.Text>
                        </Card.Body>
                        <Card.Body style = {{flex: 1}}>
                            <Card.Title className = "title">Registered Phone Number</Card.Title>
                            {this.state.displaying ? (
                                <Card.Text className = "body">{ phoneNumber }</Card.Text>
                            ) : (
                                <input
                                className = "body"
                                type="text"
                                defaultValue={phoneNumber}
                                ref={this.newPhoneNumber}
                                />
                            )}
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
                        <div style = {{flexDirection: "row", alignSelf: "flex-end"}}>
                            <button 
                            className = "edit_button" 
                            type = "button"
                            onClick={() => {this.setState({ displaying: false });}
                            }>
                                Edit
                            </button>
                            <button 
                            className = "edit_button" 
                            form = "my-form"
                            type = "submit"
                            onClick={() => {}
                            }>
                                Save
                            </button>
                        </div>
                        
                </Card>
            </form>
		)
    }
    submit(e, description, name, firstName, lastName, phoneNumber) {
        // e.preventDefault();
        if (this.newFirstName.current.value != firstName) {
            alert(this.newFirstName.current.value)
        }
        if (this.newLastName.current.value != lastName){
            alert(this.newLastName.current.value)
        }
        if (this.newPhoneNumber.current.value != phoneNumber){
            alert(this.newPhoneNumber.current.value)
        }
        if (this.newName.current.value != name){
            alert(this.newName.current.value)
        }
        if (this.newDescription.current.value != description){
            alert(this.newDescription.current.value)
        }
        
        // axios.post('http://127.0.0.1:8103/api/db_create_user', {user_type:this.state.user_type, email: this.state.email,username:this.state.username, password: this.state.password })
        //     .then(response => {
		// 		console.log(response.data)
		// 		this.setState({accountCreated:true});
		// 	})
		// 	.catch((error) => {
		// 	console.log(error)
		// });
    }
}
export default Profile
