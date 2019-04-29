import React from 'react'
import Theme from '../presentationals/Theme'
import Question from '../presentationals/Question'
import { data, description } from '../constants'
import ReduxForm from '../containers/ReduxForm.js'
import { Container, Header } from 'semantic-ui-react'

let Interaction = ({ id }) => {
  const theme = data[id].title;
  const question = data[id].description;

    return (
            <Container style={{ marginTop: '2em' }}>
            <Theme theme={theme}/>
            <Question question={question}/>
            <ReduxForm />
            </Container>
    )
}

export default Interaction
