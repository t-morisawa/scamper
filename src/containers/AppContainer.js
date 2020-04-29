import React from 'react'
import { connect } from 'react-redux'
import Opening from '../presentationals/Opening'
import Interaction from '../presentationals/Interaction'
import ResultView from '../presentationals/ResultView'
import LoaderExampleText from '../presentationals/LoadSampleText';
import { title, description, data } from '../constants'

let AppContainer = ({ index, isStart }) => {

  if ( isStart === false ) {
    return(
        <Opening title={title} description={description} />
    )
  } else if ( index === data.length ) {
    return (
        <ResultView />
    )
  } else {
    const theme = data[index].title;
    const question = data[index].description;

    return  (
        <Interaction theme={theme} question={question} />
    )
  }
}

const mapStateToProps = (state) => (
  {
    index: state.main.index,
    isStart: state.home.isStart,
  })

AppContainer = connect(mapStateToProps)(AppContainer)

export default AppContainer
