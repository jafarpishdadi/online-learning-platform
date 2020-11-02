import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import {Redirect} from 'react-router-dom'


class CreateClass extends Component {

    constructor(props) {

        super(props);

        this.state = {
            course_category: '',
            course_name:'',
			course_instructor: '',
        };

		this.handleChange = this.handleChange.bind(this);
		this.onclick = this.onClick = this.onclick.bind(this);
        this.submit = this.submit.bind(this);

	}
	onclick(event){
		let name = event.target.name;
		let value = event.target.value;
		console.log(name,value)
		let data ={};
		data[name] = value;

		this.setState(data)
	}

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        console.log(name, value)
        let data = {};
        data[name] = value;

        this.setState(data);


	}
	
    render() {
		if(this.state.classCreated){
			return <Redirect to='/dashboard' />
		  }
        return (
	<Card className="cardStyle overflow-auto">
	<Card.Body>
		<Card.Title className="cardTitleStyle">Create a Class</Card.Title>
		<form class="flex-column" onSubmit = {this.submit}>
			<div class="form-group pt-0 pl-2 pr-2">
				<label for="inputcourse_category" class="text-dark font-weight-bold">course_category</label>
				<input type="text" class="form-control" name='course_category' value={this.state.course_category} placeholder="course_category" onChange={this.handleChange} aria-describedby="course_categoryHelp" />
			</div>
			<div class="form-group pt-0 pl-2 pr-2">
				<label for="inputcourse_name" class="text-dark font-weight-bold">course_name</label>
				<input type="text" class="form-control" name='course_name' value={this.state.course_name} placeholder="course_name" onChange={this.handleChange} aria-describedby="course_nameHelp" />
			</div>
			<div class="form-group pt-0 pl-2 pr-2">
				<label for="inputcourse_instructor" class="text-dark font-weight-bold">course_instructor</label>
				<input type="course_instructor" class="form-control" name='course_instructor' value={this.state.course_instructor} onChange={this.handleChange} placeholder="course_instructor" aria-describedby="course_instructorHelp"/>
			</div>


			<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
				<button className="btnSignUp">Submit</button>
			</div>

		</form>
	</Card.Body>
</Card>

        );
    }

    submit(e) {
        e.preventDefault();

        axios.post('http://127.0.0.1:8103/api/db_create_course', {course_category: this.state.course_category,course_name:this.state.course_name, course_instructor: this.state.course_instructor })
            .then(response => {
				console.log(response.data)
				this.setState({classCreated:true});
			})
			.catch((error) => {
			console.log(error)
		})
            ;
    }
}

export default CreateClass;