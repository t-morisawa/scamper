import React from 'react'
import { connect } from 'react-redux'
import Top from '../presentationals/Top'
import Interaction from '../presentationals/Interaction'
import ResultView from '../presentationals/ResultView'
import LoaderExampleText from '../presentationals/LoadSampleText';
import { start, toggleResult } from '../actions'
import data from '../constants'


const description = data[IDEA_TYPE];


let AppContainer = ({ isStart, indexMain, ideas, indexResult, onStartButtonClick, onToggleResultButtonClick }) => {

  if ( isStart === false ) {
    return(
        <Top title={description.title} description={description.description} onStartButtonClick={onStartButtonClick} />
    )
  } else if ( indexMain === description.body.length ) {
    return (
        <ResultView ideas={ideas} index={indexResult} onToggleResultButtonClick={onToggleResultButtonClick} descriptionBody={description.body} />
    )
  } else {
    const theme = description.body[indexMain].title;
    const question = description.body[indexMain].description;

    return  (
        <Interaction theme={theme} question={question} />
    )
  }
}

const mapStateToProps = (state) => (
  {
    isStart: state.top.isStart,
    indexMain: state.main.index,
    ideas: state.main.ideas,
    indexResult: state.result.index,
  })

const mapDispatchToProps = ({
  onStartButtonClick: start,
  onToggleResultButtonClick: toggleResult,
})

AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default AppContainer
