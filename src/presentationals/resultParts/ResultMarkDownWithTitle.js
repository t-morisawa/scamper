import React from 'react'
import { data } from '../../constants'

const ResultMarkDownWithTitle = ({ text }) => {
    const result = text
    let i = 0;
    const resultList = result.map((elem) => {
        i++;
        return `# ${data[i-1]}
${elem.text}

`});

    return (
            <pre>
            <code>
            {resultList}
        </code>
            </pre>
    )
}

export default ResultMarkDownWithTitle
