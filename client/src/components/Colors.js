import React, {useState} from 'react';
import { WoodTypes } from '../wandData/woodTypes';


export default function Colors() {

  //const [style, setStyle] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const style = 'Classic';

  if (style === 'Classic') {
    const classicColors = WoodTypes.map((woodType) =>
    
      <div className='colorChoiceContainer' key={woodType.color}>
        <button onClick={() => setImageSrc(woodType.classicSrc)}>{woodType.color}</button>
      </div>
    )

    return (
      <main>
        <div>
          {classicColors}
        </div>
      </main>
    )
  }
}

