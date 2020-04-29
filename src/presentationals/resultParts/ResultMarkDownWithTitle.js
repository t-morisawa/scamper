import React from 'react'
import { data } from '../../constants'

const ResultMarkDownWithTitle = ({ ideas }) => {
    const result = ideas
    let i = 0;
    const resultList = result.map((elem) => {
        i++;
        return `# ${data[i-1].title}
${elem.ideas}

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
