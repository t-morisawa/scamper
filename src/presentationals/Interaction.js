import React from 'react'
import Theme from '../presentationals/Theme'
import Question from '../presentationals/Question'
import ReduxForm from '../containers/ReduxForm.js'
import { Container, Header } from 'semantic-ui-react'

let Interaction = ({ theme, question }) => {
    return (
            <Container style={{ marginTop: '2em' }}>
            <Theme theme={theme}/>
            <Question question={question}/>
            <ReduxForm />
            </Container>
    )
}

export default Interaction
