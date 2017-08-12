import React, { PropTypes } from 'react'
import { Header } from 'semantic-ui-react'

const Theme = ({ theme }) => (
        <div>
        <Header as='h1'>{theme}</Header>
        </div>
)

export default Theme

