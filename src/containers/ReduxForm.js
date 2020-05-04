import React, { Component } from 'react';
import { componentDidMount } from 'react-dom'
import { connect } from 'react-redux'
import { submit, inputText } from '../actions'
import { Form } from 'semantic-ui-react'

class ReduxForm extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  handleChange(event) {
    this.props.inputText(event.target.value)
  }

  handleSubmit(event) {
    this.props.submit(this.props.value)
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
        <div>
        <input ref={node => {
          this.nameInput = node
        }}
        value={this.props.value}
        onChange={this.handleChange}
        />
        </div>
        </Form>
    );
  }
}

const mapStateToProps = state => (
  {
    value: state.main.text
  }
)

const mapDispatchToProps = {
  inputText,
  submit
}

ReduxForm = connect(mapStateToProps, mapDispatchToProps)(ReduxForm)

export default ReduxForm;
