import React from 'react'
import ShowResult from '../containers/ShowResult.js'
import ToggleResult from '../containers/ToggleResult.js'
import { Container } from 'semantic-ui-react'

let ResultView = () => {
    return (
            <Container style={{ marginTop: '2em' }}>
            <ToggleResult />
            <ShowResult />
            </Container>
    )
}

export default ResultView
