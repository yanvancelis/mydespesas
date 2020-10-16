import React, {useState} from 'react'
import {Box, TitleBox} from '../../styles'

export default function Rendimento (props) {
    const [editar, setEditar] = useState(true)
    
    
    return (       
        <>
        { editar ? 
            <>
            <Box>
                <TitleBox>
                    <h4>Rendimento X</h4>
                </TitleBox>
            </Box>
            </>
        :
        <>
        </>
    
        }
        
        </>
    )
}