import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './HeaderTaskbar.css'
import search from '../../assets/search.png'
import profile from '../../assets/profile.png';
import notifications from '../../assets/notifications.png';
import messaging from '../../assets/messaging.png';
import logout from '../../assets/logout.png';
import { Redirect } from 'react-router-dom';

let headerIcons = [
    {id: 1, link:'/messageuser', imgSrc: messaging},
    {id: 2, link:'/messageuser', imgSrc: notifications }
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
    <h1 className='header'>{props.title}</h1>
    )
}
class HeaderTaskbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: false,
        }
        this.submit = this.submit.bind(this);
    }
    setRedirect = () => {
        this.setState({
          redirect: true,
        })
      }
      renderRedirect = () => {
        if (this.state.redirect)  {
                return <Redirect to='/logout' />
            }
        }
    render () {
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
                        <input className='form-control mr-sm-2' type='text' placeholder='Search'></input>
                        <button className='searchIcon my-2 my-sm-0' type='submit'>
                            <div className='searchImg'>                     <img src={search}></img></div>
                        </button>
                    </form>
                    <Profile
                        link={icons.link}
                        profileImg={icons.profileImg}
                    />
                    {headerIcons.map(
                        (icon) =>
                        <HeaderIcon
                        key={icon.id}
                        link={icon.link}
                        imgSrc={icon.imgSrc}/>
                    )}


                    {this.renderRedirect()}
                    <form class="logout p-2" onClick={this.setRedirect}>

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
    }
}

export default HeaderTaskbar