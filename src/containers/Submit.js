import React from 'react'
import Button from '../presentationals/Button'
import { submit } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = ({
    onButtonClick: submit
})

const Submit = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)

export default Submit
