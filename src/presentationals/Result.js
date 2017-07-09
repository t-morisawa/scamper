import React from 'react'

const Result = ({ text }) => {
    const result = text
    return (
            <ul>
            <li>{result[0].text}</li>
            <li>{result[1].text}</li>
            <li>{result[2].text}</li>
            <li>{result[3].text}</li>
            <li>{result[4].text}</li>
            <li>{result[5].text}</li>
            <li>{result[6].text}</li>
            </ul>
    )
}

export default Result
