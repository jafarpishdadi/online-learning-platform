import React, { Component } from 'react'

class ColourText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        const { textInfo } = this.props
        return(
                <div>{textInfo.text}</div>
            )
        }
}
export default ColourText