import React, { useState } from 'react';
import StyleGallery from '../components/StyleGallery';
import { ClassicWands } from '../wandData/classic';
import { naturalWands } from '../wandData/natural';
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

  return (
    <>
      <p>Store</p>
      <div onClick={classicHandler}>Classic</div>
      <div onClick={naturalHandler}>Natural</div>

      {wandStyle}
      {/* {wand && <div>{wand.label}</div>} */}
      <div>
          <img src={wand?.src || ''} alt={wand?.label || ''} />
        </div>
        <Aside/>
    </>
  );
}
