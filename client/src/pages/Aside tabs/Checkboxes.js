import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function IndeterminateCheckbox() {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);


  return (
    <div>
    
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        <p>Wand Core</p>
        <FormControlLabel
          label="Dragon Heart String"
          control={
            <Checkbox
              disabled={checkedOne}
              onChange={() => {
                setCheckedTwo(!checkedTwo);
                setCheckedThree(!checkedThree);
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
              }}
            />
          }
        />
      </Box>
    </div>
  );
}