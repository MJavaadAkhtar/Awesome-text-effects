import React from 'react';
import './SkewText.css'

/**
 * author:Adam Dipinto
 */

class SkewText extends React.Component {
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
            <div className="perspective-text">

                {textState.map((el,i) => {
                    console.log(i == 0? el: this.state.text.length)
                    if (i == 0){
                       return ( <div className="perspective-line">
                            <p className="perspective-p" ></p>
                            <p className="perspective-p" >{el}</p>
                        </div>)
                    }

                    else if (i == this.state.text.length-1){
                        return (<div className="perspective-line">
                            <p className="perspective-p" >{this.state.text[i - 1]}</p>
                            <p className="perspective-p" ></p>
                        </div>)
                    }

                    else{
                        return (<div className="perspective-line">
                            <p className="perspective-p" >{this.state.text[i-1]}</p>
                            <p className="perspective-p" >{el}</p>
                        </div>)
                    }
                })}
            </div>

        )
    }

}

export default SkewText;