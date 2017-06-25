import React from 'react'
import ReduxForm from './ReduxForm.js'
import { connect } from 'react-redux'

let Input = ({ dispatch }) => {
    return (<div>
            <ReduxForm />
            </div>
           )
}

Input = connect()(Input)

export default Input
