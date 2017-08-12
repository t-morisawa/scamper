import React from 'react'

const ToggleButton = ({ onButtonClick }) => {
    return (
            <button onClick={() => onButtonClick()}>
            hoge
            </button>
    )
}

export default ToggleButton
