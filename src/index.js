import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'
import reducer from './reducers'
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
        <Provider store={store}>
        <AppContainer />
        </Provider>,
    document.getElementById('root')
)
