import React, { Component } from 'react'
import './Ball.css'
export default class Ball extends Component {

    constructor(props){
        super(props);
        this.state={
            xSpeed:props.xSpeed||200,
            ySpeed:props.ySpeed||200,
            top:props.top||200,
            left:props.left||200
        }
        this.timer=setInterval(() => {
            
        }, 16);
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
