import React from 'react'
import { Container } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import { title, description } from '../constants'

const Explanation = () => {
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

export default Explanation
