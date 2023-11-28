import Button from '@mui/material/Button';


type Props = {
  label:string,
  onClick: () => void,
  disabled?: boolean
}

export default function PrimaryButton({label, onClick, disabled}: Props) {
  return (
    <Button disabled={disabled} onClick={onClick} variant="contained" style={{width: '100%'}}>{label}</Button>
  );
}