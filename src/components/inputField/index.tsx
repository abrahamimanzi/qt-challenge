import TextField from '@mui/material/TextField';

type Props = {
  placeholder:string,
  handleChange:any,
  type?:any,
  required?:boolean,
  error?: boolean,
  errorText?:string,
}

export default function InputTextfield({placeholder,handleChange, type, required, errorText, error}: Props) {
  return (
    <TextField 
      id="outlined-basic" 
      label={placeholder} 
      variant="outlined" 
      onChange={handleChange}
      type={type}
      style={{width: '100%', paddingBottom: 20}}
      required={required}
      error={error}
      helperText={errorText}
    />
  );
}