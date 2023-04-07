import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [core, setCore] = React.useState('');

  const handleChange = (event) => {
    setCore(event.target.value);
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
          <MenuItem value={1}>Quite Bendy</MenuItem>
          <MenuItem value={2}>Fairly Bendy</MenuItem>
          <MenuItem value={3}>Very Flexible</MenuItem>
          <MenuItem value={4}>Quite Flexible</MenuItem>
          <MenuItem value={5}>Surprisingly Swishy</MenuItem>
          <MenuItem value={6}>Swishy</MenuItem>
          <MenuItem value={7}>Slightly Springy</MenuItem>
          <MenuItem value={8}>Supple</MenuItem>
          <MenuItem value={9}>Reasonably Supple</MenuItem>
          <MenuItem value={10}>Pliant</MenuItem>
          <MenuItem value={11}>Brittle</MenuItem>
          <MenuItem value={12}>Hard</MenuItem>
          <MenuItem value={13}>Solid</MenuItem>
          <MenuItem value={14}>Stiff</MenuItem>
          <MenuItem value={15}>Rigid</MenuItem>
          <MenuItem value={16}>Unbending</MenuItem>
          <MenuItem value={17}>Slightly Yielding</MenuItem>
          <MenuItem value={18}>Unyielding</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}