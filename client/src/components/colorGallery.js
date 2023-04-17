import React from 'react';

export default function ColorGallery({color,setColor}) {

      const colorHandler = () => {
        setColor(color);
  }
    return (
        <div>
            <div className='side-styles'>
                    <div className="style-box"  onClick={() => colorHandler()}>
                        <p>{color.label}</p>
                    </div>
            </div>
        </div>
    );
}
