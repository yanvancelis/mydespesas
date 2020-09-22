import React from 'react'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Card from '../../components/Card'
import {Wrap, Article} from './style'
import {Box, TitleBox} from '../../styles'
import Item from '../../components/Item'

export default function Index (props) {
    return (
        <>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Box carteira>
                <TitleBox>
                    <h4>Ultimos lançamentos</h4>
                </TitleBox>
                <Item valor="500" nome="Lumnisoft Site" data="14 de Janeiro"></Item>
                <Item valor="500" nome="Lumnisoft Site" data="14 de Janeiro"></Item>
                <Item valor="500" nome="Lumnisoft Site" data="14 de Janeiro"></Item>
                
                <Item></Item>
            </Box>            
        </>
    )
}