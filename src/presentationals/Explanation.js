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

    case 'TRIZ':
        return (
                <List>
                <p>
                TRIZは課題解決の手法の一種です。<br />
                課題を40アプローチから見て考えることによって、
                課題を解決するためのアイデアを生成するのに役立ちます。
            </p>
                <p>
                既存のアイデアを一つ思い浮かべて、それに対する改善案をフォームに入力していきましょう。
            </p>
                </List>
        );

    case 'SWOT':
        return (
                <List>
                <p>
                SWOTは意思決定のための手法です。<br />
                内部・外部要因のプラス・マイナス要因を分析し、目標が達成可能かを判断します。
            </p>
                <p>
目標を一つ思い浮かべて、それに対する現状分析をフォームに入力していきましょう。
            </p>
                </List>
        );

    default:
     return (<div></div>);
    }
}

export default Explanation
