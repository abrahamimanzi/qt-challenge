import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';

type Props = {
  checked:boolean,
}

export default function CheckboxComponent({checked}: Props) {
  return (
    <Checkbox checked={checked} />
  );
}