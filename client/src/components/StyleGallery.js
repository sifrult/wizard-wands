

import React from 'react';


export default function StyleGallery({wand,setWand}) {

      const wandHandler = () => {
setWand(wand);
  }
    return (
        <div>
            <div className='side-styles'>
                    <div className="style-box"  onClick={() => wandHandler()}>
                        {wand.label}
                    </div>
            </div>
        </div>
    );
}
