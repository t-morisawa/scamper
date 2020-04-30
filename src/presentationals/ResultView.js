import React from 'react'
import ResultIdeas from '../presentationals/ResultIdeas.js'
import ToggleResult from '../containers/ToggleResult.js'
import { Container } from 'semantic-ui-react'

let ResultView = ({ ideas, index }) => {
  return (
      <Container style={{ marginTop: '2em' }}>
      <ToggleResult />
      <ResultIdeas ideas={ideas} index={index} />
      </Container>
  )
}

export default ResultView
