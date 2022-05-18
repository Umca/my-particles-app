import { InputLabel, Grid } from "@mui/material";
import { capitalizeWord, pipe, splitWord } from "../../utils/utils";
import {NumberInput} from './inputs/NumberInput'
import { CheckBoxInput } from "./inputs/CheckboxInput";
import {INPUT_TYPES} from './inputs/types'

const createComponent = (type, name, inputChild) => {
  const uniqueKey = `${name}-${inputChild.label}`

  if(type === INPUT_TYPES.NUMBER) return <NumberInput key = {uniqueKey} data={{ ...inputChild, id: `${uniqueKey}-input` }}/>
  if(type === INPUT_TYPES.CHECKBOX) return <CheckBoxInput key = {uniqueKey} data={{ ...inputChild, id: `${uniqueKey}-input` }}/>
}

export const InputSection = ({name, data}) => {

   const {children: inputChildren} = data
   const justifyContent = inputChildren.length === 1? 'start' : 'space-between'
   
   
   return (
     <Grid container spacing={0}>
      <Grid item xs={4} alignSelf="center" >
      <InputLabel>{pipe(name, [capitalizeWord, splitWord])}</InputLabel>
      </Grid>
    <Grid item  xs={8} container spacing={1} justifyContent={justifyContent}>
      {
        inputChildren.map(inputChild => {
          const {type} = inputChild
          return createComponent(type, name, inputChild)
        })
      }
    
      </Grid>
    </Grid>
  );
};



