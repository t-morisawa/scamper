import React from 'react'
import { connect } from 'react-redux'
import App from '../presentationals/App'
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
            <App />
            </div>
    )
}

const mapStateToProps = (state) => (
    {
        id: state.data.id,
    })

AppContainer = connect(mapStateToProps)(AppContainer)

export default AppContainer
