import React, { useState } from 'react';
import StyleGallery from '../components/StyleGallery';
import { classicWands } from '../wandData/classic';
import { naturalWands } from '../wandData/natural';
import {crookedSpiralWands} from '../wandData/crookedSpiral'
import {notchedWands} from '../wandData/notched'
import {ringedWands} from '../wandData/ringed'
import {softSpiralWands} from '../wandData/softSpiral'
import {spiralWands} from '../wandData/spiral'
import {stalkWands} from '../wandData/stalk'
import Aside from './Aside';

export default function Store() {
  const [wand, setWand] = useState('');
  const [wandStyle, setWandStyle] = useState([]);
  const [labelName, setLabelName] = useState('');
  const [hoveredWandLabel, setHoveredWandLabel] = useState(null);

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
    />    ));
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
    />    ));
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
    />    ));
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
    />    ));
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
    />    ));
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
    />    ));
    setWandStyle(wands);
    setWand(crookedSpiralWands[0]);
  };

  return (
    <>
      <p>Store</p>
      <div onClick={classicHandler}>Classic</div>
      <div onClick={naturalHandler}>Natural</div>
      <div onClick={crookedSpiralHandler}>Crooked Spiral</div>
      <div onClick={notchedHandler}>Notched</div>
      <div onClick={ringedHandler}>Ringed</div>
      <div onClick={softSpiralHandler}>Soft Spiral</div>
      <div onClick={spiralHandler}>Spiral</div>
      <div onClick={stalkHandler}>Stalk</div>
    <div style={{display:'flex', flexWrap: 'wrap', fontFamily: 'aclonica'}}>{wandStyle}</div>
    <p>Label value: {hoveredWandLabel || labelName}</p>

      <div>
          <img src={wand?.src || ''} alt={wand?.label || ''} />
        </div>
        <Aside/>
    </>
  );
}
