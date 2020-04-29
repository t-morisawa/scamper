import React from 'react'
import { List } from 'semantic-ui-react'

const ResultList = ({ ideas }) => {
    const result = ideas
    const resultList = result.map((elem) =>
                                  <List.Item key={elem.id}>{elem.ideas}</List.Item>
                                 );
    return (
            <List>
            {resultList}
            </List>
    )
}

export default ResultList
