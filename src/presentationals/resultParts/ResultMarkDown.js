import React from 'react'

const ResultMarkDown = ({ ideas }) => {
    const result = ideas
    const resultList = result.map((elem) =>
                                  ` - ${elem.ideas}
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
