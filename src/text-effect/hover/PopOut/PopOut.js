import React from 'react';
import './PopOut.css'

class PopOut extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name || "strikethrough",
            text: this.props.text || [],
            singleLine: this.props.oneLiner || true,
            className: this.props.className || ""
        }
    }

    render() {


        return (
            <div class={`three ${this.state.className}`}>

                {this.state.text.map((el,i) => {
                    return (
                        <div key={i} class={`threeD ${this.state.className}`}>
                            {el}
                        </div>
                    )
                })}

              
            </div>
           
        )
    }

}

export default PopOut;