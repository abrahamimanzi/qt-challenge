import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


type Props = {
  placeholder: string,
  menuItems: any,
  handleChange:any,
  value:any,
}

export default function SelectField({placeholder, menuItems, handleChange, value}: Props) {
  return (
      <FormControl sx={{ width: '100%', paddingBottom:'20px' }}>
        <InputLabel id="demo-multiple-name-label">{placeholder}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          //@ts-ignore
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {menuItems.map((el: any, idx: number) => (
            <MenuItem
              key={idx}
              value={el.id}
              >
              {el.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}