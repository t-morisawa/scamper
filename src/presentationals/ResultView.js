import React from 'react'
import ResultIdeas from './ResultIdeas.js'
import ToggleButton from './ToggleButton.js'
import { Container } from 'semantic-ui-react'

let ResultView = ({ ideas, index, onToggleResultButtonClick, descriptionBody }) => {
  return (
      <Container style={{ marginTop: '2em' }}>
      <ToggleButton onClick={onToggleResultButtonClick} />
      <ResultIdeas ideas={ideas} index={index} descriptionBody={descriptionBody} />
      </Container>
  )
}

export default ResultView
