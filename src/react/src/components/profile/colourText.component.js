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
                <div>
                    {textInfo.map(
                        (texts) => 
                            <li>{texts.text}</li>
                    )}
                </div>
            )
        }
}
export default ColourText
