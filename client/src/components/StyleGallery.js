import React from 'react';

export default function StyleGallery({ wand, setWand, labelName, setLabelName, hoveredWandLabel, setHoveredWandLabel }) {

  const wandHandler = () => {
    setWand(wand);
  };

  const handleMouseOver = () => {
    setHoveredWandLabel(wand.label);
  };

  const handleMouseLeave = () => {
    setHoveredWandLabel(null);
  };

  const colorHandler = () => {
    setLabelName(wand.label);
    setHoveredWandLabel(wand.label);
  };

  const boxStyle = {
    backgroundColor: wand.hex,
    width: '50px',
    height: '50px',
  };

  return (
    <div>
      <div className='side-styles'>
        <div className='style-box' onClick={() => wandHandler()}>
          <p
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={colorHandler}
          >
            <div style={boxStyle}></div>
            {hoveredWandLabel || labelName}
          </p>
        </div>
      </div>
    </div>
  );
}
