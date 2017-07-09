import React from 'react'
import { connect } from 'react-redux'
import Page from '../presentationals/Page'
import ShowResult from '../containers/ShowResult'
import Result from '../presentationals/Result'

let AppContainer = ({ id }) => {
    if ( id > 6 ) {
        return (
                <div>
                <ShowResult />
                </div>
        )
    }
    return  (
            <div>
            <Page id={ id }/>
            </div>
    )
}

const mapStateToProps = (state) => (
    {
        id: state.data.id,
    })

AppContainer = connect(mapStateToProps)(AppContainer)

export default AppContainer
