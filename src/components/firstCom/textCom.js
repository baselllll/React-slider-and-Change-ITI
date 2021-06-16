import React from 'react'
import './textCom.css'
class TextCom extends React.Component{
    constructor(){
        super()
        this.state = {
            text:""
        }
    }
    handlerChange = (e) => {
        this.setState({
            text:e.target.value
        })
    }
    resthandler = (e) => {
        this.setState({
            text:""
        })
    }

    render(){
        return (
            <div className="changeform">
                <input placeholder="Enter Your Value" type="text" value={this.state.text} onChange={this.handlerChange} /><br/>
                <input type='button' value="Rest" onClick={this.resthandler}/>
                <p>{this.state.text}</p>
            </div>
        )
    }
}
export default TextCom