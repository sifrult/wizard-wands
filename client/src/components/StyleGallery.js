import React from 'react';

export default function StyleGallery({ wand, setWand, labelName, setLabelName}) {

  const wandHandler = () => {
    setWand(wand);
  };

  const handleMouseOver = () => {
    console.log(`Mouse is over the ${wand.label} wand`);
    setLabelName(wand.label);
  };

  return (
    <div>
      <div className='side-styles'>
        <div className='style-box' onClick={() => wandHandler()}>
          <p onMouseOver={handleMouseOver}>HELLO</p>
        </div>
      </div>
    </div>
  );
}
