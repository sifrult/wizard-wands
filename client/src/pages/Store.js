import React, { useState } from 'react';
import { useEffect } from "react";
import StyleGallery from '../components/StyleGallery';
import { classicWands } from '../wandData/classic';
import { naturalWands } from '../wandData/natural';
import { crookedSpiralWands } from '../wandData/crookedSpiral'
import { notchedWands } from '../wandData/notched'
import { ringedWands } from '../wandData/ringed'
import { softSpiralWands } from '../wandData/softSpiral'
import { spiralWands } from '../wandData/spiral'
import { stalkWands } from '../wandData/stalk'
import Aside from './Aside';
import '@fontsource/aclonica';
import { Box, Button } from '@mui/material';

export default function Store() {
  const [wand, setWand] = useState('');
  const [wandStyle, setWandStyle] = useState([]);
  const [labelName, setLabelName] = useState('');
  const [hoveredWandLabel, setHoveredWandLabel] = useState(null);
  const [options, setOptions] = useState({ core: '', length: '', flexibility: '' })

  useEffect(() => {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = "white";
  }, []);

  const classicHandler = () => {
    const wands = classicWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />
    ));
    setWandStyle(wands);
    setWand(classicWands[0]);
  };

  const naturalHandler = () => {
    const wands = naturalWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />
    ));
    setWandStyle(wands);
    setWand(naturalWands[0]);
  };;

  const notchedHandler = () => {
    const wands = notchedWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(notchedWands[0]);
  };

  const ringedHandler = () => {
    const wands = ringedWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(ringedWands[0]);
  };

  const softSpiralHandler = () => {
    const wands = softSpiralWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(softSpiralWands[0]);
  };

  const spiralHandler = () => {
    const wands = spiralWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(spiralWands[0]);
  };

  const stalkHandler = () => {
    const wands = stalkWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(stalkWands[0]);
  };

  const crookedSpiralHandler = () => {
    const wands = crookedSpiralWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(crookedSpiralWands[0]);
  };

  const optionsHandler = (data) => {

    let keyName = Object.keys(data)[0]
    let value = Object.values(data)[0]

    if (keyName === 'core') {
      setOptions({ ...options, core: value })
    } else if (keyName === 'flexibility') {
      setOptions({ ...options, flexibility: value })
    } else if (keyName === 'length') {
      setOptions({ ...options, length: value })
    }

    console.log(options.length, options.flexibility)
  }
  const [isWandValid, setIsWandValid] = useState(null);

  const checkWand = () => {
    var randNum = Math.random();

    if (randNum < 0.9 && wand && labelName && options.core && options.length && options.flexibility) {
      console.log('YES')
      setIsWandValid(true)
    } else {
      console.log('NO')
      setIsWandValid(false)
    }
  }

  const checkout = async () => {
    window.location.href = 'https://buy.stripe.com/test_8wM0337U9cbdgpy288';
  }

  return (
    <div style={{ fontFamily: 'aclonica' }}>
      <div style={{}}>
        <div style={{width:'60%'}}>
          <div onClick={classicHandler}>Classic</div>
          <div onClick={naturalHandler}>Natural</div>
          <div onClick={crookedSpiralHandler}>Crooked Spiral</div>
          <div onClick={notchedHandler}>Notched</div>
          <div onClick={ringedHandler}>Ringed</div>
          <div onClick={softSpiralHandler}>Soft Spiral</div>
          <div onClick={spiralHandler}>Spiral</div>
          <div onClick={stalkHandler}>Stalk</div>
        </div>
        <div>
          <img src={wand?.src || ''} alt={wand?.label || ''} />
        </div>
        <div>
          <p>Wood type: {hoveredWandLabel || labelName}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '40%' }}>{wandStyle}</div>
        </div>
        <div>

          <aside style={{ width: '30%', paddingLeft: '15px', marginLeft: '150px', marginTop: '0%', float: 'right' }} >
            <Box
              sx={{
                border: 1,
                pb: 20,
                pt: 20,
              }}
            >
              <p>
                <Aside optionsHandler={optionsHandler} />
              </p></Box>
          </aside>

        </div>
        <Button onClick={checkWand} disableRipple='true'
          sx={{
            variant: 'contained',
            backgroundColor: 'grey',
            marginTop: "400px",
            marginLeft: '100px',
            fontFamily: 'aclonica',
            padding: '10px',
            color: 'white',
            ":hover": {
              bgcolor: 'grey',
              boxShadow: 3,

            }
          }}>Is this your wand?</Button>
          <p>
            {isWandValid ? (
              <div>YES! <button onClick={checkout}>Checkout</button></div>
            ) : (
              <div> Nopeee </div>
            )}
          </p>
      </div>
    </div>

  );
}
