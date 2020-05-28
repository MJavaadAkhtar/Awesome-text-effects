import React from 'react';
import './BoldThreeD.css';

class BoldThreeD extends React.Component {
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
            <div className={`${this.state.className}`}>
                {this.state.text.map((el, i) => {
                    return (
                        <h1 key={i} data-text={el}>
                            {el}
                        </h1>

                    )
                })}

            </div>
        )
    }
}

export default BoldThreeD