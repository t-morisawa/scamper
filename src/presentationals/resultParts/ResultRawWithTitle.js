import React from 'react'
import { List, Header } from 'semantic-ui-react'
import { data } from '../../constants'

const ResultRawWithTitle = ({ ideas }) => {
    const result = ideas
    let i = 0;
    const resultList = result.map((elem) => {
        i++;
      return <List.Item key={elem.id}><Header as='h2'>{data[i-1].title}</Header>{elem.ideas}</List.Item>
    });
    return (
            <List>
            {resultList}
        </List>
    )
}

export default ResultRawWithTitle
