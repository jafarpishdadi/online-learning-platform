import React, { Component } from 'react'
import './HeaderTaskbar.css'
import search from '../assets/search.png'
import profile from '../assets/profile.png';
import notifications from '../assets/notifications.png';
import messaging from '../assets/messaging.png';
import logout from '../assets/logout.png';

let headerIcons = [
    {id: 1, link:'', imgSrc: messaging},
    {id: 2, link:'', imgSrc: notifications },
    {id: 3, link:'', imgSrc: logout }
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
            
		}
    }
    render () {
        const { icons } = this.props
        return (
            <nav className='navbar sticky-top custom m-2 align-content-between'>
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
                </div>
            </nav>
        )
    }
}

export default HeaderTaskbar
 