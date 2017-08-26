import React from 'react'
import { List } from 'semantic-ui-react'

const ResultList = ({ text }) => {
    const result = text
    const resultList = result.map((elem) =>
                                  <List.Item key={elem.id}>{elem.text}</List.Item>
                                 );
    return (
            <List>
            {resultList}
            </List>
    )
}

export default ResultList
