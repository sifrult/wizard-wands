import * as React from 'react';
import Slider from '@mui/material/Slider';
const marks = [
  {
    value: 9.5,
    label: '9.5 in',
  },
  {
    value: 9.75,
  },
  {
    value: 10,
  },
  {
    value: 10.25,
  },
  {
    value: 10.5,
    label: '10.5 in',
  },
  {
    value: 10.75,
  },
  {
    value: 11,
  },
  {
    value: 11.25,
  },
  {
    value: 11.5,
    label: '11.5 in',
  },
  {
    value: 11.75,
  },
  {
    value: 12,
  },
  {
    value: 12.25,
  },
  {
    value: 12.5,
    label: '12.5 in',
  },
  {
    value: 12.75,
  },
  {
    value: 13,
  },
  {
    value: 13.25,
  },
  {
    value: 13.5,
    label: '13.5 in',
  },
  {
    value: 13.75,
  },
  {
    value: 14,
  },
  {
    value: 14.25,
  },
  {
    value: 14.5,
    label: '14.5 in',
  },
];

function valuetext(value) {
  return `${value} in`;
}


export default function DiscreteSliderMarks({optionsHandler}) {
  const [length, setLength] = React.useState('');

const handleChange = (event) => {
  setLength(event.target.value)
  optionsHandler({length:event.target.value})
}

  return (
    <div className='asideOptn'>
      <p>Wand Length:</p>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={.25}
        valueLabelDisplay="auto"
        marks={marks}
        min={9.5}
        max={14.5}
        value={length}
        onChange={handleChange}
        className='wandslider'
      />
    </div>
  )
}
