import React from 'react';
// import "../style.css"
// import styles from "../wandData/styles"

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
