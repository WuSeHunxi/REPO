import React, { Component } from 'react'



class ChildA extends React.Component{
    render(){
        return <div><h2>ChildA</h2></div>
    }
}


function ChildB(props){
    return <div><h1>ChildB</h1></div>
}


export default class NewContext extends Component {
    state={
        
    }
    render() {
        return (
            <div>
                <ChildA/>
                <ChildB/>
            </div>
        )
    }
}
