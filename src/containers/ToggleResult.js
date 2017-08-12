import React from 'react'
import { connect } from 'react-redux'
import ToggleButton from '../presentationals/ToggleButton'
import { toggleResult } from '../actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = ({
    onButtonClick: toggleResult
})

const ToggleResult = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleButton)

export default ToggleResult
