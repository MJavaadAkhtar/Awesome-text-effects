import React from 'react';
import './halfBar.css';

/**
 * author: Marwan Zibaoui
 */

class HalfBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text || [],
            singleLine: this.props.singleLine || true,
            className: this.props.className||""
        }
    }
    render(){

        return (
            <div className="halfbarDiv">
                {this.state.text.map((el,i) => {
                    return (
                        <main key={i} className={`halfBar ${this.state.className}`} >
                            <span className='halfBarSpan' >
                                <p >{el}</p>
                            </span>
                        </main>
                    )
                })}
                
            </div>
            )
    }
}

export default HalfBar