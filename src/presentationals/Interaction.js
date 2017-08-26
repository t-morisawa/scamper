import React from 'react'
import Theme from '../presentationals/Theme'
import Question from '../presentationals/Question'
import { scamper, scamperJa } from '../constants/scamper'
import { questionJa } from '../constants/scamper'
import ReduxForm from '../containers/ReduxForm.js'
import { Container, Header } from 'semantic-ui-react'

let Interaction = ({ id }) => {
    const theme = scamper[id] + ` ` + scamperJa[id]
    const question = questionJa[id]

    return (
            <Container style={{ marginTop: '2em' }}>
            <Theme theme={theme}/>
            <Question question={question}/>
            <ReduxForm />
            </Container>
    )
}

export default Interaction
