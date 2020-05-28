import React from 'react';
import './Bubbly.css';

class Bubbly extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text || [],
            singleLine: this.props.singleLine || true,
            className: this.props.className || ""
        }
    }
    render() {
        let splitString = this.state.text[0].split(" ")

        return (
            <div className={`${this.state.className}`}>

                    {splitString.map((el, i) => {
                        let wordSplit = el.split("")
                        const spl = i != splitString.length - 1

                        wordSplit.push("")

                        return wordSplit.map((elW, iW) => {
                            console.log(spl)
                            if (iW == wordSplit.length - 1) {
                                return (<span></span>)
                            }
                            return (<div className="text text-1" key={iW}>{elW}</div>)
                        })

                    })}



            </div>
        )
    }
}

export default Bubbly