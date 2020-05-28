import React from 'react';
import './LayerThreeD.css';

class LayerThreeD extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text || [],
            singleLine: this.props.singleLine || true,
            className: this.props.className || ""
        }
    }
    render() {

        return (
            <div className={`LayerThreeD ${this.state.className}`}>
                {this.state.text.map((el, i) => {
                    return (
                        <span className="LayerThreeDspan" key={i}>{el}</span>

                    )
                })}

            </div>
        )
    }
}

export default LayerThreeD