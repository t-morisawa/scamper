import React from 'react'
import { Container } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'

const TopDescription = ({ description }) => {
  return (
      <div>
        {description.split("\n").map((m, index) => {
          return (
            <span key={index}>
              {m}
              <br />
            </span>
          )
        })}
      </div>
  );
}

export default TopDescription
