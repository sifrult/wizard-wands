import React from 'react';
import Checkbox from './Aside tabs/Checkboxes'
import Stack from '@mui/material/Stack';
import Dropdown from './Aside tabs/Dropdown';
import WandSlider from './Aside tabs/Slider';



function Aside() {

    return (
        <div className='aside'>
            <Stack alignItems='center'>
                <Checkbox className='checkbox' />
                <WandSlider className='wandslider' />
                <Dropdown className='dropdown' />
            </Stack>
        </div>

    );
}

export default Aside; 