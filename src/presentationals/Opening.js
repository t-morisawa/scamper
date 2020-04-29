import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import Start from '../containers/Start'
import Explanation from './Explanation'

const Opening = ({ title, description }) => {
  return (
      <Container style={{ marginTop: '2em' }}>
      <Header as='h1'>{title}</Header>
      <Explanation description={description} />
      <Start />
      </Container>
  )
}

export default Opening
