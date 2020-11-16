import React, { Component } from 'react'

class ColourText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        const { textInfo } = this.props
        var res = {};
        var array = []
        for (var i = 0; i < textInfo.length; i++){
            res['text'] = textInfo[i];
            array[i] = JSON.parse(JSON.stringify(res));
        }
        // console.log(array)
        return(
                <div>
                    {array.map(
                        (texts) => 
                            <li>{texts.text}</li>
                    )}
                </div>
            )
        }
}
export default ColourText
