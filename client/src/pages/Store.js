import React, { useState } from 'react';
import StyleGallery from '../components/StyleGallery';
import { ClassicWands } from '../wandData/classic';
import { naturalWands } from '../wandData/natural';
import { SoftSpiralWands } from '../wandData/soft-spiral';
import { SpiralWands } from '../wandData/spiral';
import { StalkWands } from '../wandData/stalk';

import Aside from './Aside';

export default function Store() {
  const [wand, setWand] = useState('');
  const [wandStyle, setWandStyle] = useState([]);

  const classicHandler = () => {
    const wands = ClassicWands.map((wand) => (
      <StyleGallery key={wand.label} wand={wand} setWand={setWand} />
    ));
    setWandStyle(wands);
    setWand(ClassicWands[0]);
  };
  const naturalHandler = () => {
    const wands = naturalWands.map((goop) => (
      <StyleGallery key={goop.color} wand={goop} setWand={setWand}/>
    ));
    setWandStyle(wands);
    setWand(naturalWands[0]);
  };
  const softSpiralHandler = () => {
    const wands = SoftSpiralWands.map((wand) => (
      <StyleGallery key={wand.label} wand={wand} setWand={setWand} />
    ));
    setWandStyle(wands);
    setWand(SoftSpiralWands[0]);
  };
  const spiralHandler = () => {
    const wands = SpiralWands.map((wand) => (
      <StyleGallery key={wand.label} wand={wand} setWand={setWand} />
    ));
    setWandStyle(wands);
    setWand(SpiralWands[0]);
  };
  const stalkHandler = () => {
    const wands = StalkWands.map((wand) => (
      <StyleGallery key={wand.label} wand={wand} setWand={setWand} />
    ));
    setWandStyle(wands);
    setWand(StalkWands[0]);
  };

  return (
    <>
      <p>Store</p>
      <div onClick={classicHandler}>Classic</div>
      <div onClick={naturalHandler}>Natural</div>
      <div onClick={softSpiralHandler}>Soft Spiral</div>
      <div onClick={spiralHandler}>Spiral</div>
      <div onClick={stalkHandler}>Stalk</div>

      {wandStyle}
      {/* {wand && <div>{wand.label}</div>} */}
      <div>
          <img src={wand?.src || ''} alt={wand?.label || ''} />
        </div>
        <Aside/>
    </>
  );
}
