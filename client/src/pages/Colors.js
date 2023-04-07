import React, {useState} from 'react';

export default function Colors() {
  // const [style, setStyle] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  //THIS WILL BE CHANGED ONCE STYLE BUTTONS ARE COMPLETE
  const style = 'classic';
  //

  if (style === 'classic') {
    const acaciaImage = require('../assets/classicWand/classic-acacia.png');
    const alderImage = require ('../assets/classicWand/classic-alder.png');
    const appleImage = require ('../assets/classicWand/classic-apple.png');
    const ashImage = require ('../assets/classicWand/classic-ash.png');
    const aspenImage = require ('../assets/classicWand/classic-aspen.png');
    const beechImage = require ('../assets/classicWand/classic-beech.png');
    const blackWalnutImage = require ('../assets/classicWand/classic-black-walnut.png');
    const blackthornImage = require ('../assets/classicWand/classic-blackthorn.png');
    const cedarImage = require ('../assets/classicWand/classic-cedar.png');
    const cherryImage = require ('../assets/classicWand/classic-cherry.png');
    const chestnutImage = require ('../assets/classicWand/classic-chestnut.png');
    const cypressImage = require ('../assets/classicWand/classic-cypress.png');
    const dogwoodImage = require ('../assets/classicWand/classic-dogwood.png');
    const ebonyImage = require ('../assets/classicWand/classic-ebony.png');
    const elderImage = require ('../assets/classicWand/classic-elder.png');
    const elmImage = require ('../assets/classicWand/classic-elm.png');
    const englishOakImage = require ('../assets/classicWand/classic-english-oak.png');
    const firImage = require ('../assets/classicWand/classic-fir.png');
    const hawthornImage = require ('../assets/classicWand/classic-hawthorn.png');
    const hazelImage = require ('../assets/classicWand/classic-hazel.png');
    const hollyImage = require ('../assets/classicWand/classic-holly.png');
    const hornbeamImage = require ('../assets/classicWand/classic-hornbeam.png');
    const larchImage = require ('../assets/classicWand/classic-larch.png');
    const laurelImage = require ('../assets/classicWand/classic-laurel.png');
    const mapleImage = require ('../assets/classicWand/classic-maple.png');
    const pearImage = require ('../assets/classicWand/classic-pear.png');
    const pineImage = require ('../assets/classicWand/classic-pine.png');
    const poplarImage = require ('../assets/classicWand/classic-poplar.png');
    const redOakImage = require ('../assets/classicWand/classic-red-oak.png');
    const redwoodImage = require ('../assets/classicWand/classic-redwood.png');
    const rowanImage = require ('../assets/classicWand/classic-rowan.png');
    const silverLimeImage = require ('../assets/classicWand/classic-silver-lime.png');
    const spruceImage = require ('../assets/classicWand/classic-spruce.png');
    const sycamoreImage = require ('../assets/classicWand/classic-sycamore.png');
    const vineImage = require ('../assets/classicWand/classic-vine.png');
    const walnutImage = require ('../assets/classicWand/classic-walnut.png');
    const willowImage = require ('../assets/classicWand/classic-willow.png');
    const yewImage = require ('../assets/classicWand/classic-yew.png');
  

    return (
      <main className='container'>
        <div className='color-choice'>
          <h3>Choose a Wood Type:</h3>
          <hr/>

          <label for='classicAcacia'>
            <button onClick={() => setImageSrc(acaciaImage)}>Acacia</button>
          </label>

          <label for='classicAlder'>
            <button onClick={() => setImageSrc(alderImage)}>Alder</button>
          </label>

          <label for='classicApple'>
            <button onClick={() => setImageSrc(appleImage)}>Apple</button>
          </label>

          <label for='classicAsh'>
            <button onClick={() => setImageSrc(ashImage)}>Ash</button>
          </label>

          <label for='classicAspen'>
            <button onClick={() => setImageSrc(aspenImage)}>Aspen</button>
          </label>

          <label for='classicBeech'>
            <button onClick={() => setImageSrc(beechImage)}>Beech</button>
          </label>

          <label for='classicBlackWalnut'>
            <button onClick={() => setImageSrc(blackWalnutImage)}>Black Walnut</button>
          </label>

          <label for='classicBlackthorn'>
            <button onClick={() => setImageSrc(blackthornImage)}>Blackthorn</button>
          </label>

          <label for='classicCedar'>
            <button onClick={() => setImageSrc(cedarImage)}>Cedar</button>
          </label>

          <label for='classicCherry'>
            <button onClick={() => setImageSrc(cherryImage)}>Cherry</button>
          </label>

          <label for='classicChestnut'>
            <button onClick={() => setImageSrc(chestnutImage)}>Chestnut</button>
          </label>

          <label for='classicCypress'>
            <button onClick={() => setImageSrc(cypressImage)}>Cypress</button>
          </label>

          <label for='classicDogwood'>
            <button onClick={() => setImageSrc(dogwoodImage)}>Dogwood</button>
          </label>

          <label for='classicEbony'>
            <button onClick={() => setImageSrc(ebonyImage)}>Ebony</button>
          </label>

          <label for='classicElder'>
            <button onClick={() => setImageSrc(elderImage)}>Elder</button>
          </label>

          <label for='classicElm'>
            <button onClick={() => setImageSrc(elmImage)}>Elm</button>
          </label>

          <label for='classicEnglishOak'>
            <button onClick={() => setImageSrc(englishOakImage)}>English Oak</button>
          </label>

          <label for='classicFir'>
            <button onClick={() => setImageSrc(firImage)}>Fir</button>
          </label>

          <label for='classicHawthorn'>
            <button onClick={() => setImageSrc(hawthornImage)}>Hawthorn</button>
          </label>

          <label for='classicHazel'>
            <button onClick={() => setImageSrc(hazelImage)}>Hazel</button>
          </label>

          <label for='classicHolly'>
            <button onClick={() => setImageSrc(hollyImage)}>Holly</button>
          </label>

          <label for='classicHornbeam'>
            <button onClick={() => setImageSrc(hornbeamImage)}>Hornbeam</button>
          </label>

          <label for='classicLarch'>
            <button onClick={() => setImageSrc(larchImage)}>Larch</button>
          </label>

          <label for='classicLaurel'>
            <button onClick={() => setImageSrc(laurelImage)}>Laurel</button>
          </label>

          <label for='classicMaple'>
            <button onClick={() => setImageSrc(mapleImage)}>Maple</button>
          </label>

          <label for='classicPear'>
            <button onClick={() => setImageSrc(pearImage)}>Pear</button>
          </label>

          <label for='classicPine'>
            <button onClick={() => setImageSrc(pineImage)}>Pine</button>
          </label>

          <label for='classicPoplar'>
            <button onClick={() => setImageSrc(poplarImage)}>Poplar</button>
          </label>

          <label for='classicRedOak'>
            <button onClick={() => setImageSrc(redOakImage)}>Red Oak</button>
          </label>

          <label for='classicRedwood'>
            <button onClick={() => setImageSrc(redwoodImage)}>Redwood</button>
          </label>

          <label for='classicRowan'>
            <button onClick={() => setImageSrc(rowanImage)}>Rowan</button>
          </label>

          <label for='classicSilverLime'>
            <button onClick={() => setImageSrc(silverLimeImage)}>Silver Lime</button>
          </label>

          <label for='classicSpruce'>
            <button onClick={() => setImageSrc(spruceImage)}>Spruce</button>
          </label>

          <label for='classicSycamore'>
            <button onClick={() => setImageSrc(sycamoreImage)}>Sycamore</button>
          </label>

          <label for='classicVine'>
            <button onClick={() => setImageSrc(vineImage)}>Vine</button>
          </label>

          <label for='classicWalnut'>
            <button onClick={() => setImageSrc(walnutImage)}>Walnut</button>
          </label>

          <label for='classicWillow'>
            <button onClick={() => setImageSrc(willowImage)}>Willow</button>
          </label>

          <label for='classicYew'>
            <button onClick={() => setImageSrc(yewImage)}>Yew</button>
          </label>
        </div>

        <img src={imageSrc} alt='wandImage'></img>
      </main>
    );
  }
}