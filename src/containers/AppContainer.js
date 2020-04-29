import React from 'react'
import { connect } from 'react-redux'
import Opening from '../presentationals/Opening'
import Interaction from '../presentationals/Interaction'
import ResultView from '../presentationals/ResultView'
import { data } from '../constants';
import LoaderExampleText from '../presentationals/LoadSampleText';

let AppContainer = ({ index, isStart }) => {
    if ( isStart === false ) {
        return(
            <Opening />
        )
    }
    else if ( index === data.length ) {
        return (
                <ResultView />
        )
    }
    return  (
            <Interaction index={ index }/>
    )
}

const mapStateToProps = (state) => (
    {
        index: state.main.index,
        isStart: state.home.isStart,
    })

AppContainer = connect(mapStateToProps)(AppContainer)

export default AppContainer
