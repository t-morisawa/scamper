import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import Start from '../containers/Start'
import Explanation from './Explanation'
import { title } from '../constants'

class Opening extends Component {
    render() {
        return (
                <Container style={{ marginTop: '2em' }}>
                <Header as='h1'>{title}</Header>
                <Explanation />
                <Start />
                </Container>
        )
    }
}

export default Opening
