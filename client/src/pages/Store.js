import React, { useState } from 'react';
import Aside from './Aside';
// import Colors from '../components/Colors';
import StyleGallery from '../components/wandStyle';
import ColorGallery from '../components/colorGallery';
import { styles } from '../wandData/styles';
import { classicData } from '../wandData/classic'
import { crookedData } from '../wandData/crooked'

export default function Store() {
  const [wand,setWand]= useState({})
  const [color, setColor]= useState({})

    return (
      <div>
        <p> Store</p>
        {styles.map((styles)=>(
          <StyleGallery key={styles.label} wand={styles} setWand={setWand}/>
        ))}
        <div>
          
        {classicData.map((data)=>(
          <ColorGallery key={data.label} color={data} setColor={setColor}/>
        ))}
        </div>
        <div> 
          <img src={wand?.src || ''} alt={wand?.label || ''} />
        </div>
        <Aside/>
    </div>
    );
  }
