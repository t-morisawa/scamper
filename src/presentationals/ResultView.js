import React from 'react'
import ResultIdeas from './ResultIdeas.js'
import ToggleButton from './ToggleButton.js'
import { Container } from 'semantic-ui-react'

let ResultView = ({ ideas, index, onToggleResultButtonClick }) => {
  return (
      <Container style={{ marginTop: '2em' }}>
      <ToggleButton onClick={onToggleResultButtonClick} />
      <ResultIdeas ideas={ideas} index={index} />
      </Container>
  )
}

export default ResultView
