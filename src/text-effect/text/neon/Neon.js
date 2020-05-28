import React from 'react';
import './Neon.css';

class Neon extends React.Component {
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
            <div className={`${this.className}`}>
                {this.state.text.map((el, i) => {
                    return (
                        <p  key={i} class="logo-1">
                           {el}
                        </p>

                    )
                })}

            </div>
        )
    }
}

export default Neon