import React, { useState } from 'react';
import Auth from "../utils/auth";
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

export default function Store() {
  const [wand, setWand] = useState('');
  const [wandStyle, setWandStyle] = useState(null);
  const [labelName, setLabelName] = useState('');
  const [hoveredWandLabel, setHoveredWandLabel] = useState(null);
  const [options, setOptions] = useState({ core: '', length: '', flexibility: '' })
  const [isWandValid, setIsWandValid] = useState(undefined);

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
  
  const checkWand = () => {
    var randNum = Math.random();

    if (randNum < 0.9 && wand && labelName && options.core && options.length && options.flexibility) {
      setIsWandValid(true)
    } else {
      setIsWandValid(false)
    }
  }

  const checkout = async () => {
    window.location.href = 'https://buy.stripe.com/test_8wM0337U9cbdgpy288';
  }

  if (Auth.loggedIn()) {
    return (
      <div style={{ fontFamily: 'aclonica' }}>
  
        <div className='store'>
  
          <div className='topContainer'>
  
            <div className='wandChoices'>
              <div className='wand' onClick={classicHandler}>Classic</div>
              <div className='wand' onClick={naturalHandler}>Natural</div>
              <div className='wand' onClick={crookedSpiralHandler}>Crooked Spiral</div>
              <div className='wand' onClick={notchedHandler}>Notched</div>
              <div className='wand' onClick={ringedHandler}>Ringed</div>
              <div className='wand' onClick={softSpiralHandler}>Soft Spiral</div>
              <div className='wand' onClick={spiralHandler}>Spiral</div>
              <div className='wand' onClick={stalkHandler}>Stalk</div>
            </div>
  
            <div className='wandImg'>
              <img src={wand?.src || ''} alt={wand?.label || ''} />
            </div>
  
            <div className='colorSection'>
              {wandStyle ? <p>Wood type: {hoveredWandLabel || labelName}</p> : null}
              <div className='colorChoices'>{wandStyle}</div>
            </div>
  
          </div>
  
          <div className='bottomContainer'>
  
            <div className='aside'>
              <Aside optionsHandler={optionsHandler} />
            </div>
  
            <div className='button'>
              <button onClick={checkWand}>Is this your wand?</button>
              <p> {isWandValid === undefined ? (<div></div>
              ) : (isWandValid ? (
                <div className='afterBtn'>YES! <button onClick={checkout}>Checkout</button></div>
              ) : (
                <div className='afterBtn'>No, try again</div>
              )
              )}
              </p>
            </div>
          </div>
  
        </div>
  
      </div>
    );
  } else {
    return (
      <div style={{ fontFamily: 'aclonica' }}>
  
        <div className='store'>
  
          <div className='topContainer'>
  
            <div className='wandChoices'>
              <div className='wand' onClick={classicHandler}>Classic</div>
              <div className='wand' onClick={naturalHandler}>Natural</div>
              <div className='wand' onClick={crookedSpiralHandler}>Crooked Spiral</div>
              <div className='wand' onClick={notchedHandler}>Notched</div>
              <div className='wand' onClick={ringedHandler}>Ringed</div>
              <div className='wand' onClick={softSpiralHandler}>Soft Spiral</div>
              <div className='wand' onClick={spiralHandler}>Spiral</div>
              <div className='wand' onClick={stalkHandler}>Stalk</div>
            </div>
  
            <div className='wandImg'>
              <img src={wand?.src || ''} alt={wand?.label || ''} />
            </div>
  
            <div className='colorSection'>
              {wandStyle ? <p>Wood type: {hoveredWandLabel || labelName}</p> : null}
              <div className='colorChoices'>{wandStyle}</div>
            </div>
  
          </div>
  
          <div className='bottomContainer'>
  
            <div className='aside'>
              <Aside optionsHandler={optionsHandler} />
            </div>
  
            <div className='notLoggedIn'>
             <p> You Must Be Logged In To Pick A Wand!</p>
            </div>
          </div>
  
        </div>
  
      </div>
    )
}
}
