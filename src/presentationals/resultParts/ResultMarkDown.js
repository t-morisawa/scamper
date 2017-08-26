import React from 'react'

const ResultMarkDown = ({ text }) => {
    const result = text
    const resultList = result.map((elem) =>
                                  ` - ${elem.text}
`);

    return (
            <pre>
            <code>
            {resultList}
            </code>
            </pre>
    )
}

export default ResultMarkDown
