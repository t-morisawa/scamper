import React from 'react'
import { connect } from 'react-redux'
import Result from '../presentationals/resultParts/ResultList'
import ResultMarkDown from '../presentationals/resultParts/ResultMarkDown'

let ShowResult = ({ id, text }) => {
    switch (id % 2) {
    case 0:
        return (
                <ResultMarkDown text={ text }/>
        )
    default:
        return (
                <Result text={ text }/>
        )
    }
}

const mapStateToProps = (state) => (
    {
        id: state.resultId.id,
        text: state.data.text,
    })

ShowResult = connect(mapStateToProps)(ShowResult)

export default ShowResult
