import React, { Component } from 'react';
import { componentDidMount } from 'react-dom'
import { connect } from 'react-redux'
import { submit } from '../actions'
import { Form } from 'semantic-ui-react'

class ReduxForm extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    return (
        <Form onSubmit={events => {
          return new Promise(resolve => {
            events.preventDefault()
            this.props.dispatch(submit(this.nameInput.value))
            this.nameInput.value = ''
          })
        }}>
        <div>
        <input ref={node => {
          this.nameInput = node
        }} />
        </div>
        </Form>
    );
  }
}

ReduxForm = connect()(ReduxForm)

export default ReduxForm;
