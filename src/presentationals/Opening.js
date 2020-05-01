import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import StartButton from '../presentationals/StartButton'
import Explanation from './Explanation'

const Opening = ({ title, description, onStartButtonClick }) => {
  return (
      <Container style={{ marginTop: '2em' }}>
      <Header as='h1'>{title}</Header>
      <Explanation description={description} />
      <StartButton onClick={onStartButtonClick} />
      </Container>
  )
}

export default Opening
