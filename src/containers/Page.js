import React from 'react'
import Theme from '../presentationals/Theme'
import Question from '../presentationals/Question'
import Input from './Input'
import { connect } from 'react-redux'
import { scamper, scamperJa } from '../constants/scamper'
import { questionJa } from '../constants/scamper'

let Page = ({ id, dispatch }) => {
    const theme = scamper[id] + ` ` + scamperJa[id]
    const question = questionJa[id]

    return (
            <div>
            <Theme theme={theme}/>
            <Question question={question}/>
            <Input />
            </div>
    )
}

const mapStateToProps = (state) => (
{
    id: state.data.id,
})

Page = connect(mapStateToProps)(Page)

export default Page
