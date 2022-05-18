import { Grid, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { capitalizeWord, pipe, splitWord } from "../../utils/utils";
import { Additable } from "./behavioursComponents/Additable";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NumberInput } from "./inputs/NumberInput";

export const BehaviourSection = ({name, data}) => {
    console.log(name, data)
    return <Accordion> 
              <AccordionSummary  
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
            
                <Typography>{pipe(name, [capitalizeWord, splitWord])}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid container spacing={2} justifyContent="left">
            {
                    data.children.map((child, i) => {
                        return child.additable 
                        ? <Additable key={`${name}-additable-${i}`} data={{...child, id: `${name}-list`}}/> 
                        : <Grid item><NumberInput key= {`${name}-non-additable-${i}`} data={{...child, id:`${name}-${child.label}-input`}}/></Grid>
                    })
                }
    
            </Grid>
            </AccordionDetails>
        </Accordion>

  
}