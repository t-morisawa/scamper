import React from 'react'
import ResultList from '../presentationals/resultParts/ResultList'
import ResultMarkDown from '../presentationals/resultParts/ResultMarkDown'
import ResultMarkDownWithTitle from '../presentationals/resultParts/ResultMarkDownWithTitle'
import ResultRawWithTitle from '../presentationals/resultParts/ResultRawWithTitle'

let ResultIdeas = ({ index, ideas }) => {
  switch (index % 4) {
  case 0:
    return (
        <ResultList ideas={ ideas }/>
    )
  case 1:
    return (
        <ResultMarkDown ideas={ ideas }/>
    )
  case 2:
    return (
        <ResultMarkDownWithTitle ideas = { ideas }/>
    )
  case 3:
    return (
        <ResultRawWithTitle ideas = { ideas }/>
    )
  default:
  }
}

export default ResultIdeas
