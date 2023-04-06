import React, {useState} from 'react';

export default function Colors() {
  // const [style, setStyle] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  //THIS WILL BE CHANGED ONCE STYLE BUTTONS ARE COMPLETE
  const style = 'classic';
  //

  if (style === 'classic') {
    //Rendering in all the images
    const acaciaImage = require('../../images/classicWand/classic-acacia.png');
    const alderImage = require ('../../images/classicWand/classic-alder.png');
    const appleImage = require ('../../images/classicWand/classic-apple.png');
    const ashImage = require ('../../images/classicWand/classic-ash.png');
    const aspenImage = require ('../../images/classicWand/classic-aspen.png');
    const beechImage = require ('../../images/classicWand/classic-beech.png');
    const blackWalnutImage = require ('../../images/classicWand/classic-black-walnut.png');
    const blackthornImage = require ('../../images/classicWand/classic-blackthorn.png');
    const cedarImage = require ('../../images/classicWand/classic-cedar.png');
    const cherryImage = require ('../../images/classicWand/classic-cherry.png');
    const chestnutImage = require ('../../images/classicWand/classic-chestnut.png');
    const cypressImage = require ('../../images/classicWand/classic-cypress.png');
    const dogwoodImage = require ('../../images/classicWand/classic-dogwood.png');
    const ebonyImage = require ('../../images/classicWand/classic-ebony.png');
    const elderImage = require ('../../images/classicWand/classic-elder.png');
    const elmImage = require ('../../images/classicWand/classic-elm.png');
    const englishOakImage = require ('../../images/classicWand/classic-english-oak.png');
    const firImage = require ('../../images/classicWand/classic-fir.png');
    const hawthornImage = require ('../../images/classicWand/classic-hawthorn.png');
    const hazelImage = require ('../../images/classicWand/classic-hazel.png');
    const hollyImage = require ('../../images/classicWand/classic-holly.png');
    const hornbeamImage = require ('../../images/classicWand/classic-hornbeam.png');
    const larchImage = require ('../../images/classicWand/classic-larch.png');
    const laurelImage = require ('../../images/classicWand/classic-laurel.png');
    const mapleImage = require ('../../images/classicWand/classic-maple.png');
    const pearImage = require ('../../images/classicWand/classic-pear.png');
    const pineImage = require ('../../images/classicWand/classic-pine.png');
    const poplarImage = require ('../../images/classicWand/classic-poplar.png');
    const redOakImage = require ('../../images/classicWand/classic-red-oak.png');
    const redwoodImage = require ('../../images/classicWand/classic-redwood.png');
    const rowanImage = require ('../../images/classicWand/classic-rowan.png');
    const silverLimeImage = require ('../../images/classicWand/classic-silver-lime.png');
    const spruceImage = require ('../../images/classicWand/classic-spruce.png');
    const sycamoreImage = require ('../../images/classicWand/classic-sycamore.png');
    const vineImage = require ('../../images/classicWand/classic-vine.png');
    const walnutImage = require ('../../images/classicWand/classic-walnut.png');
    const willowImage = require ('../../images/classicWand/classic-willow.png');
    const yewImage = require ('../../images/classicWand/classic-yew.png');

    return (
      <main className='container'>
        <div className='color-choice'>
          <h3>Colors:</h3>
          <hr/>

          <label for='classicAcacia'>
            <button onClick={() => setImageSrc(acaciaImage)} onMouseEnter={() => setImageSrc(acaciaImage)}>Acacia</button>
          </label>

          <label for='classicAlder'>
            <button onClick={() => setImageSrc(alderImage)}onMouseEnter={() => setImageSrc(alderImage)}>Alder</button>
          </label>

          <label for='classicApple'>
            <button onClick={() => setImageSrc(appleImage)} onMouseEnter={() => setImageSrc(appleImage)}>Apple</button>
          </label>

          <label for='classicAsh'>
            <button onClick={() => setImageSrc(ashImage)} onMouseEnter={() => setImageSrc(ashImage)}>Ash</button>
          </label>

          <label for='classicAspen'>
            <button onClick={() => setImageSrc(aspenImage)} onMouseEnter={() => setImageSrc(aspenImage)}>Aspen</button>
          </label>

          <label for='classicBeech'>
            <button onClick={() => setImageSrc(beechImage)} onMouseEnter={() => setImageSrc(beechImage)}>Beech</button>
          </label>

          <label for='classicBlackWalnut'>
            <button onClick={() => setImageSrc(blackWalnutImage)} onMouseEnter={() => setImageSrc(blackWalnutImage)}>Black Walnut</button>
          </label>

          <label for='classicBlackthorn'>
            <button onClick={() => setImageSrc(blackthornImage)} onMouseEnter={() => setImageSrc(blackthornImage)}>Blackthorn</button>
          </label>

          <label for='classicCedar'>
            <button onClick={() => setImageSrc(cedarImage)} onMouseEnter={() => setImageSrc(cedarImage)}>Cedar</button>
          </label>

          <label for='classicCherry'>
            <button onClick={() => setImageSrc(cherryImage)} onMouseEnter={() => setImageSrc(cherryImage)}>Cherry</button>
          </label>

          <label for='classicChestnut'>
            <button onClick={() => setImageSrc(chestnutImage)} onMouseEnter={() => setImageSrc(chestnutImage)}>Chestnut</button>
          </label>

          <label for='classicCypress'>
            <button onClick={() => setImageSrc(cypressImage)} onMouseEnter={() => setImageSrc(cypressImage)}>Cypress</button>
          </label>

          <label for='classicDogwood'>
            <button onClick={() => setImageSrc(dogwoodImage)} onMouseEnter={() => setImageSrc(dogwoodImage)}>Dogwood</button>
          </label>

          <label for='classicEbony'>
            <button onClick={() => setImageSrc(ebonyImage)} onMouseEnter={() => setImageSrc(ebonyImage)}>Ebony</button>
          </label>

          <label for='classicElder'>
            <button onClick={() => setImageSrc(elderImage)} onMouseEnter={() => setImageSrc(elderImage)}>Elder</button>
          </label>

          <label for='classicElm'>
            <button onClick={() => setImageSrc(elmImage)} onMouseEnter={() => setImageSrc(elmImage)}>Elm</button>
          </label>

          <label for='classicEnglishOak'>
            <button onClick={() => setImageSrc(englishOakImage)} onMouseEnter={() => setImageSrc(englishOakImage)}>English Oak</button>
          </label>

          <label for='classicFir'>
            <button onClick={() => setImageSrc(firImage)} onMouseEnter={() => setImageSrc(firImage)}>Fir</button>
          </label>

          <label for='classicHawthorn'>
            <button onClick={() => setImageSrc(hawthornImage)} onMouseEnter={() => setImageSrc(hawthornImage)}>Hawthorn</button>
          </label>

          <label for='classicHazel'>
            <button onClick={() => setImageSrc(hazelImage)} onMouseEnter={() => setImageSrc(hazelImage)}>Hazel</button>
          </label>

          <label for='classicHolly'>
            <button onClick={() => setImageSrc(hollyImage)} onMouseEnter={() => setImageSrc(hollyImage)}>Holly</button>
          </label>

          <label for='classicHornbeam'>
            <button onClick={() => setImageSrc(hornbeamImage)} onMouseEnter={() => setImageSrc(hornbeamImage)}>Hornbeam</button>
          </label>

          <label for='classicLarch'>
            <button onClick={() => setImageSrc(larchImage)} onMouseEnter={() => setImageSrc(larchImage)}>Larch</button>
          </label>

          <label for='classicLaurel'>
            <button onClick={() => setImageSrc(laurelImage)} onMouseEnter={() => setImageSrc(laurelImage)}>Laurel</button>
          </label>

          <label for='classicMaple'>
            <button onClick={() => setImageSrc(mapleImage)} onMouseEnter={() => setImageSrc(mapleImage)}>Maple</button>
          </label>

          <label for='classicPear'>
            <button onClick={() => setImageSrc(pearImage)} onMouseEnter={() => setImageSrc(pearImage)}>Pear</button>
          </label>

          <label for='classicPine'>
            <button onClick={() => setImageSrc(pineImage)} onMouseEnter={() => setImageSrc(pineImage)}>Pine</button>
          </label>

          <label for='classicPoplar'>
            <button onClick={() => setImageSrc(poplarImage)} onMouseEnter={() => setImageSrc(poplarImage)}>Poplar</button>
          </label>

          <label for='classicRedOak'>
            <button onClick={() => setImageSrc(redOakImage)} onMouseEnter={() => setImageSrc(redOakImage)}>Red Oak</button>
          </label>

          <label for='classicRedwood'>
            <button onClick={() => setImageSrc(redwoodImage)} onMouseEnter={() => setImageSrc(redwoodImage)}>Redwood</button>
          </label>

          <label for='classicRowan'>
            <button onClick={() => setImageSrc(rowanImage)} onMouseEnter={() => setImageSrc(rowanImage)}>Rowan</button>
          </label>

          <label for='classicSilverLime'>
            <button onClick={() => setImageSrc(silverLimeImage)} onMouseEnter={() => setImageSrc(silverLimeImage)}>Silver Lime</button>
          </label>

          <label for='classicSpruce'>
            <button onClick={() => setImageSrc(spruceImage)} onMouseEnter={() => setImageSrc(spruceImage)}>Spruce</button>
          </label>

          <label for='classicSycamore'>
            <button onClick={() => setImageSrc(sycamoreImage)} onMouseEnter={() => setImageSrc(sycamoreImage)}>Sycamore</button>
          </label>

          <label for='classicVine'>
            <button onClick={() => setImageSrc(vineImage)} onMouseEnter={() => setImageSrc(vineImage)}>Vine</button>
          </label>

          <label for='classicWalnut'>
            <button onClick={() => setImageSrc(walnutImage)} onMouseEnter={() => setImageSrc(walnutImage)}>Walnut</button>
          </label>

          <label for='classicWillow'>
            <button onClick={() => setImageSrc(willowImage)} onMouseEnter={() => setImageSrc(willowImage)}>Willow</button>
          </label>

          <label for='classicYew'>
            <button onClick={() => setImageSrc(yewImage)} onMouseEnter={() => setImageSrc(yewImage)}>Yew</button>
          </label>
        </div>

        <img src={imageSrc} alt='wandImage'></img>
      </main>
    );
  }
}