import React, { Component } from 'react'

export default class MyClassDemo extends Component {
    render() {
        return (
            <div>
                组件的内容{this.props.number}
            </div>
        )
    }
}
