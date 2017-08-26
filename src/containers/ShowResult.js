import React from 'react'
import { connect } from 'react-redux'
import ResultList from '../presentationals/resultParts/ResultList'
import ResultMarkDown from '../presentationals/resultParts/ResultMarkDown'

let ShowResult = ({ id, text }) => {
    switch (id % 2) {
    case 0:
        return (
                <ResultList text={ text }/>
        )
    case 1:
        return (
                <ResultMarkDown text={ text }/>
        )
    default:
    }
}

const mapStateToProps = (state) => (
    {
        id: state.resultId.id,
        text: state.data.text,
    })

ShowResult = connect(mapStateToProps)(ShowResult)

export default ShowResult
