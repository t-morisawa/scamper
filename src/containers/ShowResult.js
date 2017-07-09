import React from 'react'
import { connect } from 'react-redux'
import Result from '../presentationals/Result'

let ShowResult = ({ text }) => {
    return (
            <div>
            <Result text={ text }/>
            </div>
    )
}

const mapStateToProps = (state) => (
    {
        text: state.data.text,
    })

ShowResult = connect(mapStateToProps)(ShowResult)

export default ShowResult
