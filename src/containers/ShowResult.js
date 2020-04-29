import React from 'react'
import { connect } from 'react-redux'
import ResultList from '../presentationals/resultParts/ResultList'
import ResultMarkDown from '../presentationals/resultParts/ResultMarkDown'
import ResultMarkDownWithTitle from '../presentationals/resultParts/ResultMarkDownWithTitle'
import ResultRawWithTitle from '../presentationals/resultParts/ResultRawWithTitle'

let ShowResult = ({ id, ideas }) => {
    switch (id % 4) {
    case 0:
        return (
                <ResultList ideas={ ideas }/>
        )
    case 1:
        return (
                <ResultMarkDown ideas={ ideas }/>
        )
    case 2:
        return (
                <ResultMarkDownWithTitle ideas = { ideas }/>
        )
    case 3:
        return (
                <ResultRawWithTitle ideas = { ideas }/>
        )
    default:
    }
}

const mapStateToProps = (state) => (
    {
        id: state.result.index,
        ideas: state.main.ideas,
    })

ShowResult = connect(mapStateToProps)(ShowResult)

export default ShowResult
