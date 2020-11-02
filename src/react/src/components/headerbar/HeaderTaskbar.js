import React, { Component } from 'react'
import axios from 'axios';
import './HeaderTaskbar.css'
import search from '../../assets/search.png'
import profile from '../../assets/profile.png';
import notifications from '../../assets/notifications.png';
import messaging from '../../assets/messaging.png';
import logout from '../../assets/logout.png';
import { Redirect } from 'react-router-dom';

let headerIcons = [
    {id: 1, link:'', imgSrc: messaging},
    {id: 2, link:'', imgSrc: notifications }
]

function HeaderIcon(props) {
    return (
        <div className='p-2'>
        <a href={props.link} imgSrc={props.imgSrc}>
            <img
            src={props.imgSrc}
            alt={props.imgSrc}
            />
        </a>
        </div>
    );
}

function Profile(props) {
    return (
        <div className='p-2'>
        <a href={props.link} imgSrc={props.profileImg}>
            <img
            src={props.profileImg}
            alt={profile}
            />
        </a>
        </div>
    );
}

function Header(props) {
    return (
    <h1 classname='header'>{props.title}</h1>
    )
}

class HeaderTaskbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.submit = this.submit.bind(this);
    }
    render () {
<<<<<<< Updated upstream
        if (!this.state.loggedIn) {
            return <Redirect to='/login' />
        }
=======
        // if (!localStorage.getItem('token')) {
        //     return <Redirect to='/login' />
        // }
>>>>>>> Stashed changes
        const { icons } = this.props
        return (
            <div className='Navbar'>
            <nav className='navbar sticky-top headerTask m-2 align-content-between'>
                <div className='header'>
                    <Header
                        title={icons.title}
                    />
                </div> 
                <div className='icons d-flex flex-row'>
                    <form className='form-inline'>
                        <input class='form-control mr-sm-2' type='text' placeholder='Search'></input>
                        <button className='searchIcon my-2 my-sm-0' type='submit'>
                            <img src={search}></img>
                        </button>
                    </form>
                    <Profile
                        link={icons.link}
                        profileImg={icons.profileImg}
                    />
                    {headerIcons.map(
                        (icon) =>
                        <HeaderIcon
                        link={icon.link}
                        imgSrc={icon.imgSrc}/>
                    )}
                    <form class="flex-row" onSubmit = {this.submit}>
                        <button className='logoutIcon my-2 my-sm-0'>
                            <img src={logout}></img>
                        </button>
						</form>
                </div>
            </nav>
            </div>
        )
    }
    submit(e) {
        e.preventDefault();

        axios.post('http://127.0.0.1:8103/api/db_logout', {username: this.state.username, password: this.state.password })
            .then(response => {
				console.log(response.data)
                this.setState({loggedIn:false});
            })
			.catch((error) => {
			console.log(error)
		})
            ;
    }
}

export default HeaderTaskbar
 