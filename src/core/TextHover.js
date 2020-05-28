import React from 'react';
import HalfBar from '../text-effect/hover/halfbar/halfBar'
import StrikeThrough from '../text-effect/hover/strikethrough/strikethrough'
import HalfbarFull from '../text-effect/hover/halfbarFull/halfbarFull'
import SkewText from '../text-effect/hover/SkewText/SkewText'
import PopOut from '../text-effect/hover/PopOut/PopOut'
import SkewOneline from '../text-effect/hover/SkewOneline/SkewOneline'

class TextHover extends React.Component {

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
            case "HalfBar":
                return (<HalfBar className={this.state.className} text={this.state.text} />);

            case "strikethrough":
                return (<StrikeThrough className={this.state.className} text={this.state.text} />);

            case "HalfbarFull":
                return (<HalfbarFull type={this.state.type} className={this.state.className} text={this.state.text} />);

            case "SkewText":
                return (<SkewText className={this.state.className} text={this.state.text} />)

            case "PopOut":
                return (<PopOut className={this.state.className} text={this.state.text} />)

            case "SkewOneline":
                return (<SkewOneline className={this.state.className} text={this.state.text} />)

            default:
                return (<StrikeThrough className={this.state.className} text={this.state.text} />);
        }


    }
}

export default TextHover 