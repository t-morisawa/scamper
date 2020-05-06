import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class StartButton extends Component {
  constructor(props) {
    super(props)
    this.button = React.createRef();
  }

  componentDidMount() {
    this.button.current.focus();
  }

  render () {
    return (
        <Button onClick={this.props.onClick} ref={this.button}>
        Press Return Key
      </Button>
    );
  }
}

export default StartButton
