import React from 'react'

const Button = ({ onButtonClick }) => (
        <a href='#' onClick={() => onButtonClick('foo')}>
        button
    </a>
)

export default Button
