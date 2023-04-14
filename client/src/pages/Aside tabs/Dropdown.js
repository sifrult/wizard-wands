import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({optionsHandler}) {
  const [core, setCore] = React.useState('');

  const handleChange = (event) => {
    setCore(event.target.value);
    optionsHandler({flexibility:event.target.value})
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <p>Wand Flexibility:</p>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Flexibility</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={core}
          label="Flexibility"
          onChange={handleChange}
        >
          <MenuItem value={'Quite Bendy'}>Quite Bendy</MenuItem>
          <MenuItem value={"Fairly Bendy"}>Fairly Bendy</MenuItem>
          <MenuItem value={'Very Flexible'}>Very Flexible</MenuItem>
          <MenuItem value={'Quite Flexible'}>Quite Flexible</MenuItem>
          <MenuItem value={'Surprisingly Swishy'}>Surprisingly Swishy</MenuItem>
          <MenuItem value={'Swishy'}>Swishy</MenuItem>
          <MenuItem value={'Slightly Springy'}>Slightly Springy</MenuItem>
          <MenuItem value={'Supple'}>Supple</MenuItem>
          <MenuItem value={'Reasonably Supple'}>Reasonably Supple</MenuItem>
          <MenuItem value={'Pliant'}>Pliant</MenuItem>
          <MenuItem value={'Brittle'}>Brittle</MenuItem>
          <MenuItem value={'Hard'}>Hard</MenuItem>
          <MenuItem value={'Solid'}>Solid</MenuItem>
          <MenuItem value={'Stiff'}>Stiff</MenuItem>
          <MenuItem value={'Rigid'}>Rigid</MenuItem>
          <MenuItem value={'Unbending'}>Unbending</MenuItem>
          <MenuItem value={'Slightly Yielding'}>Slightly Yielding</MenuItem>
          <MenuItem value={'Unyielding'}>Unyielding</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
