import React, { useState } from 'react';
import Aside from './Aside';
import Colors from '../components/Colors';
import StyleGallery from '../components/wandStyle';
import { styles } from '../wandData/styles';
import { WoodTypes } from '../wandData/woodTypes';



export default function Store() {
  const [wand,setWand]= useState({})

    return (
      <div>
        <p> Store</p>
        {WoodTypes.map((styles)=>(
          <StyleGallery key={styles.color} wand={styles} setWand={setWand}/>
        ))}
        <div>
          <Colors />
        </div>
        <div> 
          <img src={wand?.src || ''} alt={wand?.label || ''} />
        </div>
        <Aside/>
    </div>
    );
  }
