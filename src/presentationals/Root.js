import React from 'react'
import AppContainer from '../containers/AppContainer'
import reducer from '../reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

let Root = () => {
  return  (
      <Provider store={store}>
      <AppContainer />
      </Provider>
  )
}

export default Root
