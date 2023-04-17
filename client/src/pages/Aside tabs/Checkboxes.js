import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function IndeterminateCheckbox({optionsHandler}) {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);


  return (
    <div className='asideOptn'>
        <p>Wand Core</p>
        <FormControlLabel
          label="Dragon Heart String"
          control={
            <Checkbox
              disabled={checkedOne}
              onChange={() => {
                setCheckedTwo(!checkedTwo);
                setCheckedThree(!checkedThree);
                optionsHandler({core:"Dragon Heart String"})
              }}
            />
          }
        />
        <FormControlLabel
          label="Phoenix Feather"
          control={
            <Checkbox
              disabled={checkedTwo}
              onChange={() => {
                setCheckedOne(!checkedOne);
                setCheckedThree(!checkedThree);
                optionsHandler({core:'Phoenix Feather'})
              }}
            />
          }
        />
        <FormControlLabel
          label="Unicorn Hair"
          control={
            <Checkbox
              disabled={checkedThree}
              onChange={() => {
                setCheckedOne(!checkedOne);
                setCheckedTwo(!checkedTwo);
                optionsHandler({core:'Unicorn Hair'})
              }}
            />
          }
        />
    </div>
  );
}
