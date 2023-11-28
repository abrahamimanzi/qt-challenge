import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type Props = {
  label: string,
  items:any,
  handleChange:(arg:any) => void,
}

export default function RadioButton({label, items, handleChange}: Props) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        {items?.map((el:any) => {
          return(
            <FormControlLabel onChange={handleChange} value={el.id} control={<Radio />} label={el.label} />
          )
        })}
      </RadioGroup>
    </FormControl>
  );
}