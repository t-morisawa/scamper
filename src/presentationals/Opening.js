import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import Start from '../containers/Start'

class Opening extends Component {
    render() {
        return (
                <Container style={{ marginTop: '2em' }}>
                <Header as='h1'>SCAMPER</Header>
                <p>
                SCAMPERは新しいアイデアを出すための手法の一種です。<br />
            既存の製品やサービスを7つの観点から見て考えることによって、
            新しい製品やサービスのアイデアを生成するのに役立ちます。
            </p>
                <p>
                既存のアイデアを一つ思い浮かべて、それに対する改善案をフォームに入力していきましょう。
                </p>
                <Start />
                </Container>
        )
    }
}

export default Opening
