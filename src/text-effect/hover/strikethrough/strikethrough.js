import React from 'react';
import './strikethrough.scss'

/**
 * author: Mandy Michael
 */

class StrikeThrough extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name || "strikethrough",
            text: this.props.text || [],
            singleLine: this.props.oneLiner || true,
            className: this.props.className || ""
        }
    }

    render(){
        console.log(this.state)
        return (
            <div >
                {this.state.text.map((el,i) => {
                    return (
                        <h1 key={i} className={`strikethrough ${this.state.className}`}>
                            <span >
                               {el}
                            </span>
                        </h1>
                    )
                })}
            </div>
            
        )
    }

}

export default StrikeThrough;