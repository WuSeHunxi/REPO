import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "./formContext";
import FormInput from './FormInput'
import FormButton from './FormButton'

export default class Form extends Component {
  state = {
    formData: {},
    changeFormData:(name,val)=>{
        this.setState({
            formData:{
                ...this.state.formData,
                [name]:val
            }
        })
    },
    submit:()=>{
      this.props.onSubmit&&this.props.onSubmit(this.state.formData)
    }
  };

  static propTypes={
    onSubmit:PropTypes.func
  }

  render() {
    return (
      <div>
        <Provider value={this.state}>{this.props.children} </Provider>
      </div>
    );
  }
}

Form.Input=FormInput;
Form.Button=FormButton