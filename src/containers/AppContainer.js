import React from 'react'
import { connect } from 'react-redux'
import Opening from '../presentationals/Opening'
import Interaction from '../presentationals/Interaction'
import ResultView from '../presentationals/ResultView'
import LoaderExampleText from '../presentationals/LoadSampleText';
import { title, description, data } from '../constants'
import { start } from '../actions'

let AppContainer = ({ isStart, indexMain, ideas, indexResult, onStartButtonClick }) => {

  if ( isStart === false ) {
    return(
        <Opening title={title} description={description} onStartButtonClick={onStartButtonClick} />
    )
  } else if ( indexMain === data.length ) {
    return (
        <ResultView ideas={ideas} index={indexResult} />
    )
  } else {
    const theme = data[indexMain].title;
    const question = data[indexMain].description;

    return  (
        <Interaction theme={theme} question={question} />
    )
  }
}

const mapStateToProps = (state) => (
  {
    isStart: state.home.isStart,
    indexMain: state.main.index,
    ideas: state.main.ideas,
    indexResult: state.result.index,
  })

const mapDispatchToProps = ({
  onStartButtonClick: start,
})

AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default AppContainer
