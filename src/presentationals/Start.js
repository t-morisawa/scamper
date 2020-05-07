import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import StartButton from '../presentationals/StartButton'
import StartDescription from './StartDescription'

const Start = ({ title, description, onStartButtonClick }) => {
  return (
      <Container style={{ marginTop: '2em' }}>
      <Header as='h1'>{title}</Header>
      <StartDescription description={description} />
      <StartButton onClick={onStartButtonClick} />
      </Container>
  )
}

export default Start
