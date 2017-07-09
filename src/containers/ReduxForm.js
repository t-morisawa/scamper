import React, { Component } from 'react';
import { componentDidMount } from 'react-dom'
import { connect } from 'react-redux'
import { submit as submitAction } from '../actions'

let ReduxForm = ({ dispatch }) => {
    let input

    return (
            <form onSubmit={events => {
                return new Promise(resolve => {
                    events.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(submitAction(input.value))
                    input.value = '';
                })
            }}>
            <div>
            <input ref={node => {
                input = node
            }} />
            </div>
            <button type="submit">Submit</button>
            </form>
    );
}

ReduxForm = connect()(ReduxForm)

export default ReduxForm;
