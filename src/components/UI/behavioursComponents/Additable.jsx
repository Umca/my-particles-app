import { Grid, Button } from "@mui/material";
import {NumberInput} from '../inputs/NumberInput'


export const Additable = (props) => {
    const {children, id} = props.data
    return <>
        <Grid item xs={12} container justifyContent="space-between">
            {
                children.map(child => {
                    return <NumberInput key ={`${id}-${child.label}`} data={{...child, id:`${id}-${child.label}`}}/>
                })
            }
        </Grid>
        <Grid item xs={12} justifyContent="center">
            <Button variant="outlined">+</Button>
        </Grid>
    </>
}