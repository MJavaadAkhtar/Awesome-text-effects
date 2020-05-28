import React from 'react';
// import Reveal from './text-effect/hover/Reveal/Reveal'
import Neon from '../text-effect/text/neon/Neon'
import BoldThreeD from '../text-effect/text/BoldThreeD/BoldThreeD'
import LayerThreeD from '../text-effect/text/LayerThreeD/LayerThreeD'
import Bubbly from '../text-effect/text/Bubbly/Bubbly'


class TextEffect extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name || "HalfBar",
            text: this.props.text || "",
            className: this.props.className || "",
            type: this.props.type || "1"
        }
    }

    render() {

        switch (this.props.name) {
            case "Neon":
                return (<Neon className={this.state.className} text={this.state.text} />);

            case "BoldThreeD":
                return (<BoldThreeD className={this.state.className} text={this.state.text} />);

            case "LayerThreeD":
                return (<LayerThreeD className={this.state.className} text={this.state.text} />)

            case "Bubbly":
                return (<Bubbly className={this.state.className} text={this.state.text} />)

            default:
                return (<BoldThreeD className={this.state.className} text={this.state.text} />);
        }


    }
}

export default TextEffect