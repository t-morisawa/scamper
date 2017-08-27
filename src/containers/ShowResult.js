import React from 'react'
import { connect } from 'react-redux'
import ResultList from '../presentationals/resultParts/ResultList'
import ResultMarkDown from '../presentationals/resultParts/ResultMarkDown'
import ResultMarkDownWithTitle from '../presentationals/resultParts/ResultMarkDownWithTitle'
import ResultRawWithTitle from '../presentationals/resultParts/ResultRawWithTitle'

let ShowResult = ({ id, text }) => {
    switch (id % 4) {
    case 0:
        return (
                <ResultList text={ text }/>
        )
    case 1:
        return (
                <ResultMarkDown text={ text }/>
        )
    case 2:
        return (
                <ResultMarkDownWithTitle text = { text }/>
        )
    case 3:
        return (
                <ResultRawWithTitle text = { text }/>
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
