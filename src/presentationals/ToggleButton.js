import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class ToggleButton extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.refs.togglebutton.focus();
  }

  render () {
    return (
        <Button onClick={this.props.onClick} ref='togglebutton'>
        switch result view
      </Button>
    );
  }
}

export default ToggleButton;
