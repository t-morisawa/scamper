import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class StartButton extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.refs.startbutton.focus();
    }

    render () {
        return (
            <Button onClick={() => this.props.onButtonClick()} ref='startbutton'>
                Press Return Key
            </Button>
        );
    }
}

export default StartButton
