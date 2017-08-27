import React from 'react'
import { connect } from 'react-redux'
import Opening from '../presentationals/Opening'
import Interaction from '../presentationals/Interaction'
import ResultView from '../presentationals/ResultView'
import { data } from '../constants';
import LoaderExampleText from '../presentationals/LoadSampleText';

let AppContainer = ({ id, isStart }) => {
    if ( isStart === false ) {
        return(
            <Opening />
        )
    }
    else if ( id === data.length ) {
        return (
                <ResultView />
        )
    }
    return  (
            <Interaction id={ id }/>
    )
}

const mapStateToProps = (state) => (
    {
        id: state.data.id,
        isStart: state.isStart,
    })

AppContainer = connect(mapStateToProps)(AppContainer)

export default AppContainer
