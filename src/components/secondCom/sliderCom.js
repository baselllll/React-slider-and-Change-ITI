import React from 'react'
import './sliderCom.css'
class SliderCom extends React.Component{
    timer;
    constructor(){
        super()
        this.state = {
            images: [
              "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
              "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
              "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
              "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
              "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
              "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
              "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
              "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
            ],
            currentIndex: 0,
          }
    }
    Previous = () => {
        if(this.state.currentIndex === 0){
            console.log('first state')
        }else{
            this.setState({
                currentIndex:--this.state.currentIndex
            })
        }
    }
    Play = () => {
        this.timer = setInterval(() => {
            if(this.state.currentIndex === this.state.images.length){
                this.setState({
                    currentIndex:0
                })
            }else{
                this.setState({
                    currentIndex:++this.state.currentIndex
                })
            }
        }, 1000);
    }
    Stop = () => {
        clearInterval(this.timer)
    }
    Next = () => {
        if(this.state.currentIndex < this.state.images.length-1){
            this.setState({
                currentIndex:++this.state.currentIndex
            })
        }else{
            console.log('last image')
        }
    }
    render(){
        return (
            <div>
               <div>
                   <div className="slider">
                     <img src={this.state.images[this.state.currentIndex]}/>
                   </div>
                   <div className="operations">
                       <button onClick={this.Previous}>Previous</button>
                       <button onClick={this.Play}>Play</button>
                       <button onClick={this.Stop}>Stop</button>
                       <button onClick={this.Next}>Next</button>
                   </div>
               </div>
            </div>
        )
    }
}
export default SliderCom