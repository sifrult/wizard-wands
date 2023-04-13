import { React } from "react";
import image from './assets/storefront.png'
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Link, BrowserRouter as Router } from "react-router-dom";


function Site() {



    return (
        <Box component="span" sx={{
            width: '100%',
            height: 300,
            backgroundColor: '#white',
        }}>

            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>

                <img src={image} alt="Appfront" style={{ width: '50%' }} />

                    <Link to='/Store'>
                        <Button
                            sx={{
                                position: 'absolute',
                                top: '65%',
                                left: '48.5%',
                                transform: 'translate(-50%, -50%)',
                                height: '45%',
                                width: '8%',
                                backgroundColor: 'transparent',
                                border: 'none',
                                padding: 0,
                            }}
                        />
                    </Link>
            </Box>
        </Box>
    )
};

export default Site