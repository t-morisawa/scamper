import React from 'react'

const ResultMarkDownWithTitle = ({ ideas, descriptionBody }) => {
    const result = ideas
    let i = 0;
    const resultList = result.map((elem) => {
        i++;
        return `# ${descriptionBody[i-1].title}
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
