import React from 'react';
import './SkewOneline.scss'

class SkewOneline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name || "strikethrough",
            text: this.props.text || [],
            singleLine: this.props.oneLiner || true,
            className: this.props.className || ""
        }
    }

    render() {

        let splitString = this.state.text[0].split(" ")
        

        return (
            <div className="text SkewOneline">
                {splitString.map((el,i)=>{
                    let wordSplit = el.split("")
                    const spl = i != splitString.length - 1

                    wordSplit.push("")

                    return wordSplit.map((elW, iW) => {
                        console.log(spl)
                        if (iW == wordSplit.length-1){
                            return (<span className= "SkewOneline"></span> )
                        }
                        return (<span className="SkewOneline" key={iW}>{elW}</span>)
                    })

                })}

            </div>
           

        )
    }

}

export default SkewOneline;