import React from 'react'
import { connect } from 'react-redux'
import StartButton from '../presentationals/StartButton'
import { start } from '../actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = ({
    onButtonClick: start
})

const Start = connect(
    mapStateToProps,
    mapDispatchToProps
)(StartButton)

export default Start
