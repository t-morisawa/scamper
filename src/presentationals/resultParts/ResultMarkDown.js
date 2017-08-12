import React from 'react'

const ResultMarkDown = ({ text }) => {
    const result = text
    return (
            <pre>
            <code>
            - {result[0].text}
        - {result[1].text}
        - {result[2].text}
        - {result[3].text}
        - {result[4].text}
        - {result[5].text}
        - {result[6].text}
            </code>
            </pre>
    )
}

export default ResultMarkDown
