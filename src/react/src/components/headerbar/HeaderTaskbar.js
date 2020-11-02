import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HeaderTaskbar.css'
import search from '../../assets/search.png'
import profile from '../../assets/profile.png';
import notifications from '../../assets/notifications.png';
import messaging from '../../assets/messaging.png';
import logout from '../../assets/logout.png';
import { Redirect } from 'react-router-dom';

let headerIcons = [
    {id: 1, link:'/sidebar', imgSrc: messaging},
    {id: 2, link:'/sidebar', imgSrc: notifications }
]

function HeaderIcon(props) {
    return (
        <div className='p-2'>
        <Link to={props.link}>
            <button className='headerIcons'>
            <img
            src={props.imgSrc}
            alt={props.imgSrc}
            />
            </button>
        </Link>
        </div>
    );
}

function Profile(props) {
    return (
        <div className='p-2'>
        <Link to={props.link}>
            <button className='headerIcons'>
            <img
            src={props.profileImg}
            alt={profile}
            />
            </button>
        </Link>
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

        if (!this.state.loggedIn) {
=======
        if (!localStorage.getItem('token')) {

            return <Redirect to='/login' />
        }
=======
        // if (!localStorage.getItem('token')) {
        //     return <Redirect to='/login' />
        // }

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
                    <form class="logout p-2" onSubmit = {this.submit}>
                        <button className='headerIcons'>
                            <img src={logout}></img>
                        </button>
						</form>
                </div>
            </nav>
            </div>
        )
    }
    submit() {
        localStorage.clear();
        // e.preventDefault();
        // axios.post('http://127.0.0.1:8103/api/db_logout', {username: this.state.username })
        //     .then(response => {
		// 		console.log(response.data)
        //           this.setState({loggedIn:false});
        //     })
		//   	.catch((error) => {
        //     console.log(error)
		// });
    }
}

export default HeaderTaskbar
 