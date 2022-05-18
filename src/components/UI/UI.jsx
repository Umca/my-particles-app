import React from 'react'
import {Grid} from '@mui/material'
import { InputSection } from './InputSection'
import {BehaviourSection} from './BehaviourSection'
import { uiConfig } from '../../configs/UIConfig'
import { Typography } from '@mui/material'

export const UI = () => {
    return (
        <Grid item xs={4} container direction="column" spacing={0}> 
            <Typography align="center" variant="h4">General</Typography>
            {
                Object.entries(uiConfig.general).map(([key, value])=>{
                    return  <InputSection key={key} name={key} data={value}/>
                })
            }
            <Typography align="center" variant="h4">Behaviours</Typography>
            {
                Object.entries(uiConfig.behaviours).map(([key, value])=>{
                    return <BehaviourSection key={key} name={key} data={value}/>
                })
            }
        </Grid>
    )

}