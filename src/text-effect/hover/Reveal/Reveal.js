import React from 'react';
import './Reveal.css'

class Reveal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name || "strikethrough",
            text: this.props.text || [],
            singleLine: this.props.oneLiner || true,
            className: this.props.className || "",
            type: ["1", "2", "3", "4", "5"].includes(this.props.type) ? this.props.type : "1"
        }
    }

    render() {

        let textState = this.state.text
        textState.push("")

        return (
            <h1 class="home-title">
                <span>Simple text reveal with css</span>
                <span>using pseudo elements</span>
            </h1>
        )
    }

}

export default Reveal;