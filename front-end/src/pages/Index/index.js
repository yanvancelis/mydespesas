import React from 'react'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Card from '../../components/Card'
import {Wrap, Article} from './style'
import SuperCard from '../../components/Content'

export default function Index (props) {
    return (
        <>
            <Header></Header>
            <Wrap>
                <Menu></Menu>
                <Article>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <SuperCard>
                        <h1>OPA</h1>
                    </SuperCard>
                </Article>
            </Wrap>
            
        </>
    )
}