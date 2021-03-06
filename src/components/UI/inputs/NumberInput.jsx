import { TextField } from "@mui/material";

export const NumberInput = (props) => {
    const {defaultValue, id, label, min, max, step} = props.data
    console.log(min, max, step)
    return <TextField
    name="number"
    label={label}
    size="small"
    defaultValue={defaultValue}
    margin="normal" 
    id={id}
    InputProps={{
      inputProps: {
        type: 'number',
        min: min || -99000, max: max || 99000,
        step: step || 1
      }
    }}
  />
}