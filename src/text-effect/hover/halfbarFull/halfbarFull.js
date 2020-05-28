import React from 'react';
import './halfbarFull.css'

class HalfbarFull extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name || "strikethrough",
            text: this.props.text || [],
            singleLine: this.props.oneLiner || true,
            className: this.props.className || "",
            type:["1","2","3","4","5"].includes(this.props.type)?this.props.type:"1"
        }
    }

    render() {
        console.log(this.state)
        return (
            <div >
                <h3 class="r-title news__title">
                    <a href="#0" class={`r-link animated-underline animated-underline_type${this.state.type} news__link`}>
                        Implementing Private Variables In JavaScript
						</a>
                </h3>	
            </div>

        )
    }

}

export default HalfbarFull;