import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from '../assets/uimpactify-logo.png'

const NavItem = ({link, imgSrc, title}) => {
  return (
        
        <a href={link} title={title}>
            <li>
                <img
                src={imgSrc}
                alt={title}
                />
                <span>{title}</span>
            </li>
        </a>
        
  )
}

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
		}
    }
    render() {
        const { books } = this.props
        return (
            <nav className="sideBar">
                <img
                    className="menuIcon"
                    src={logo}
                    />
                <ul>
                    {books.map(
                        (book) => 
                            <NavItem
                                link={book.link} 
                                imgSrc={book.imgSrc} 
                                title={book.title}/>
                    )}
                </ul>
            </nav>
        );
    }
}

export default Sidebar
