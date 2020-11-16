import React, { Component } from 'react'
import './calendar.css'
import Card from 'react-bootstrap/Card'
import Refresh from '../../assets/externalSync.png'
import AddEvent from '../../assets/addEvent.png'
import Modal from '../popUp/Modal.js'
import ReactDOM from "react-dom";
import axios from 'axios';

class SmallCards extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

	render() {
		return (
			<div class="d-flex flex-column">
				<Modal show={this.state.show} handleClose={this.hideModal}>
					<p>{window.localStorage.getItem('date')}</p>
				</Modal>
				<div class="card-deck pt-4 custom-deck">
					<a href="#" class="card custom-card pl-0 custom-a" onClick={this.showModal}>
						<img class="rounded mx-auto d-block pl-3 pt-2" src={AddEvent}/>
						<p class="card-text custom-p mx-auto p-2 align-text">Add/Join <br />an Event</p>
					</a>
					<a href="#" class="card custom-card custom-a">
						<img class="rounded mx-auto d-block pt-3" src={Refresh}/>
						<p class="card-text custom-p mx-auto p-2 align-text-top">Sync with External</p>
					</a>
				</div>
			</div>
		)
	}
}

export default SmallCards
