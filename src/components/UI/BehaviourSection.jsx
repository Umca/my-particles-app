import { Grid, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { capitalizeWord, pipe, splitWord } from "../../utils/utils";
import { Additable } from "./behavioursComponents/Additable";

export const BehaviourSection = ({name, data}) => {
    return <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h5">{pipe(name, [capitalizeWord, splitWord])}</Typography>
                </Grid>
                {
                    data.children.map(child => {
                        return child.additable ? <Additable key={name} data={{...child, id: `${name}-list`}}/> : ''
                    })
                }
    
            </Grid>
  
}