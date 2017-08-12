import React from 'react'
import { connect } from 'react-redux'
import Interaction from '../presentationals/Interaction'
import ResultView from '../presentationals/ResultView'
import Result from '../presentationals/Result'

let AppContainer = ({ id }) => {
    if ( id > 6 ) {
        return (
                <div>
                <ResultView />
                </div>
        )
    }
    return  (
            <div>
            <Interaction id={ id }/>
            </div>
    )
}

const mapStateToProps = (state) => (
    {
        id: state.data.id,
    })

AppContainer = connect(mapStateToProps)(AppContainer)

export default AppContainer
