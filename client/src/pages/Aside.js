import React from 'react';
import Checkbox from './Aside tabs/Checkboxes'
import Stack from '@mui/material/Stack';
import Dropdown from './Aside tabs/Dropdown';
import WandSlider from './Aside tabs/Slider';

function Aside({optionsHandler}) {

    return (
        <div className='aside'>
            <Stack alignItems='center'>
                <Checkbox className='checkbox' optionsHandler={optionsHandler}/>
                <WandSlider className='wandslider' optionsHandler={optionsHandler}/>
                <Dropdown className='dropdown' optionsHandler={optionsHandler}/>
            </Stack>
        </div>
    );
}

export default Aside;
