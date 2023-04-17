import React from 'react';
import Checkbox from './Aside tabs/Checkboxes'
import Dropdown from './Aside tabs/Dropdown';
import WandSlider from './Aside tabs/Slider';

function Aside({optionsHandler}) {

    return (
        <div className='asideContainer'>
            <Checkbox optionsHandler={optionsHandler}/>
            <WandSlider optionsHandler={optionsHandler}/>
            <Dropdown optionsHandler={optionsHandler}/>
        </div>
    );
}

export default Aside;
