import React, { useState } from 'react';
import Aside from './Aside';
import StyleGallery from '../components/wandStyle';
import { styles } from '../wandData/styles';

export default function Store() {
  const [wand,setWand]= useState({})

    return (
      <div>
        <p> Store</p>
        {styles.map((styles)=>(
          <StyleGallery key={styles.label} wand={styles} setWand={setWand}/>
        ))}

        <div> 
          <img src={wand?.src || ''} alt={wand?.label || ''} />
        </div>
        <Aside/>
    </div>
    );
  }
