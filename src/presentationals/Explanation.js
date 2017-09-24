import React from 'react'
import { Container } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import { title } from '../constants'

const Explanation = ({ theme }) => {
    switch (title) {
    case 'scamper':
        return (
                <List>
                <p>
                SCAMPER is a method for improving new ideas.<br />
                It helps to generate new ideas for products and services, by looking at them from seven points of view.
                </p>
                <p>
                Let's imagine one existing idea and let us fill in the form for improvement.
            </p>
                </List>
        );

    case 'scamperJa':
    default:
        return (
                <List>
                <p>
                SCAMPERは新しいアイデアを出すための手法の一種です。<br />
                既存の製品やサービスを7つの観点から見て考えることによって、
            新しい製品やサービスのアイデアを生成するのに役立ちます。
            </p>
                <p>
                既存のアイデアを一つ思い浮かべて、それに対する改善案をフォームに入力していきましょう。
            </p>
                </List>
        );
    }
}

export default Explanation
