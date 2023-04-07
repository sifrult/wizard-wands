import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function IndeterminateCheckbox() {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  // const children = (
  //   <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
  //     <FormControlLabel
  //       label="Child 1"
  //       control={
  //         <Checkbox
  //           checked={checkedOne}
  //           onChange={() => setCheckedOne(!checkedOne)}
  //         />
  //       }
  //     />
  //     <FormControlLabel
  //       label="Child 2"
  //       control={
  //         <Checkbox
  //           checked={checkedTwo}
  //           onChange={() => setCheckedTwo(!checkedTwo)}
  //         />
  //       }
  //     />
  //   </Box>
  // );

  return (
    <div>
    
      {/* {children} */}
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
          label="Pheonix Feather"
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
          label="Child 2"
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